import React from 'react';
import { useSearch } from '../hooks/useSearch';
import { MoviesApp } from '../components/MoviesApp';

export const PopularesPage = () => {
    const { data } = useSearch(`popular`); 

    return (
        <>
            <div className="row">
                <div className="col-sm-12 text-center text-white">
                    <h1>Populares</h1>
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
