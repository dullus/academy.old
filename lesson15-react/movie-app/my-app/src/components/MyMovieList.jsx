import React from 'react'
import Movie from './MyMovie';


const MyMovieList = ({ movies, onDelete }) => {
    return (
        <>
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} onDelete={onDelete}></Movie>
            ))}
        </>
    )
}

export default MyMovieList
