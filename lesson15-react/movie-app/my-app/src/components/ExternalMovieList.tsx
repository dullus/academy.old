import { IExternalMovieData } from '../App'
import Movie from './ExternalMovie'

interface iMyProps {
    movies: IExternalMovieData[]
    addToMyMovies: Function
}

const ExternalMovieList = ({ movies, addToMyMovies }: iMyProps) => {
    const numOfShowedMovies = 6;
    return (
        <div className="movies-container">
            {
                movies.length
                    ? movies.map((movie, i) =>
                        i < numOfShowedMovies ? <Movie addToMyMovies={addToMyMovies} key={movie.id} movie={movie} /> : "")
                    : <div>Try another movie (ex: Green Mile)</div>
            }
        </div>
    )
}

export default ExternalMovieList
