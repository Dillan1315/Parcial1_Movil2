import React from 'react'
import { MovieApp } from './MovieApp'
export const MoviesApp = ({movies}) => {
    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="row">
                    {
                        movies.map( movie => 
                            <div key={movie.id} className="col-sm-12 col-md-6 col-lg-4">
                                <MovieApp movie={movie} />
                            </div>
                        )
                    }
                </div>
            </div>
        </>  
    )
}
