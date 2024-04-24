import React from 'react';
import { useSearch } from '../hooks/useSearch';
import { MoviesApp } from '../components/MoviesApp';

export const EstrenosPage = () => {
    const { data } = useSearch(`upcoming`); 

    return (
        <>
            <div className="row">
                <div className="col-sm-12 text-center text-white">
                    <h1>Próximos Estrenos</h1>
                </div>
            </div>
            <div className="container">
                {data && data.results ? (
                    <>
                        <MoviesApp movies={data.results} />
                    </>
                ) : (
                    <div>No data.</div>
                )}
            </div>
        </>
    )
}
