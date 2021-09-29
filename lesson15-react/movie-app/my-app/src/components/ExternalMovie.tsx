import { IExternalMovieData } from '../App';

interface iMyProps {
    movie: IExternalMovieData
    addToMyMovies: Function
}
const ExternalMovie = ({ addToMyMovies, movie }: iMyProps) => {

    const { title, overview, voteAverage, releaseDate, id, disable } = movie;

    return (
        <div className="movie-container" >
            <h2 className="movie-container-title">{(title)}</h2>
            <p className="movie-container-overview">{overview}</p>
            <h3>Vote Average: {voteAverage}</h3>
            <p> Release Date: {releaseDate}</p>
            <button disabled={disable} onClick={() => addToMyMovies(id)} className="movie-container-btn">Add to the WatchList</button>
        </div>
    )
}
export default ExternalMovie;