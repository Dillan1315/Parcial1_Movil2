import { useEffect, useState } from 'react';

export const useSearch = (url) => {
  const apiKey = '492d218f089fd8c20e9c3a945b482a9f';
  const language = 'es-CO'; 
  const urlBase = `https://api.themoviedb.org/3/movie/`;

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fullUrl = `${urlBase}${url}?page=1&api_key=${apiKey}&language=${language}`;
      const response = await fetch(fullUrl);
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, [url]);

  return { data };
};

export const  New_Date =(old_date) =>{
  const months = [
      {id: 1, name: 'Enero'},
      {id: 2, name: 'Febrero'},
      {id: 3, name: 'Marzo'},
      {id: 4, name: 'Abril'},
      {id: 5, name: 'Mayo'},
      {id: 6, name: 'Junio'},
      {id: 7, name: 'Julio'},
      {id: 8, name: 'Agosto'},
      {id: 9, name: 'Septiembre'},
      {id: 10, name: 'Octubre'},
      {id: 11, name: 'Noviembre'},
      {id: 12, name: 'Diciembre'}
  ];
  const array_date = old_date.split("-");
  const year = array_date[0];
  const month_id = parseInt(array_date[1], 10);
  const month = months.find(element => element.id === month_id);
  const day = array_date[2];
  return `${day} de ${month.name} del ${year}`;
}



