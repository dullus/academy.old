import { FaTimes } from 'react-icons/fa';
import { IMovieData } from '../App';


interface IMyProps {
    movie: IMovieData
    onDelete: Function
}
const MyMovie = ({ movie, onDelete }: IMyProps) => {

    return (
        <div className='table-container'>
            <table className='table'>
                <tbody>
                    <tr className='table-movie-titles'>
                        <th>Film</th>
                        <th>Overview</th>
                        <th>Rating</th>
                        <th>Release date:</th>
                    </tr>
                    <tr className='table-movie-values'>
                        <td>{movie.title}</td>
                        <td className="table_td-overview">{movie.overview}</td>
                        <td>{movie.voteAverage}</td>
                        <td className="table_td-release">{movie.releaseDate}</td>
                    </tr>
                </tbody>
            </table>
            <h3><FaTimes className="btn-delete" onClick={() => onDelete(movie.id)} /></h3>
        </div>
    )
}

export default MyMovie
