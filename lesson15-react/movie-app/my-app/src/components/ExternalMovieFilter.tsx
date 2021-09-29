import { useState } from 'react'
import { IExternalMovieData } from '../App';

import MovieList from './ExternalMovieList'

interface iMyProps {
    movies: IExternalMovieData[]
    addToMyMovies: Function
}

const ExternalMovieFilter = ({ movies, addToMyMovies }: iMyProps) => {
    const [searchMovies, setSearchMovies] = useState("");
    const filterMovies = movies.filter((item: any) => {
        return searchMovies !== ""
            ? item.title.toLowerCase().includes(searchMovies.toLowerCase())
            : item;
    });
    return (
        <div className="filter-section">
            <input className="searchInput" type="text" name="search" placeholder="Search movie"
                onChange={(e) => setSearchMovies(e.target.value)}></input>
            <MovieList addToMyMovies={addToMyMovies} movies={filterMovies}></MovieList>
        </div>
    )
}

export default ExternalMovieFilter
