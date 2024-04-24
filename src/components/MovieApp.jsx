import React from 'react'
import { New_Date } from '../hooks/useSearch';
export const MovieApp = ({movie}) => {
    const date = New_Date(movie.release_date)
    return (
        <>
            <div className="text-center m-3 " >
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..."/>
                <h6 className="text-white fw-medium mt-3">{ movie.title}</h6>
                <h9 className=" text-white-50 fw-medium">{date}</h9>
            </div>
        </>
    )
}

