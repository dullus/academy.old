import { useState } from 'react';

interface IMyProps {
    onAdd: Function
}
const AddMovie = ({ onAdd }: IMyProps) => {

    const [title, setTitle] = useState('');
    const [overview, setOverview] = useState('');
    const [voteAverage, setVoteAverage] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!(title && overview && voteAverage && releaseDate)) {
            alert('Please add text')
            return
        }
        onAdd({ title, overview, voteAverage, releaseDate })

        setTitle('');
        setOverview('');
        setVoteAverage('');
        setReleaseDate('');
    }
    return (
        <div>
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Film</label>
                    <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className='form-control'>
                    <label>Overview</label>
                    <input type='text' placeholder='Overview' value={overview} onChange={(e) => setOverview(e.target.value)}></input>
                </div>
                <div className='form-control'>
                    <label>Rating</label>
                    <input type='text' placeholder='Rating' value={voteAverage} onChange={(e) => setVoteAverage(e.target.value)}></input>
                </div>
                <div className='form-control'>
                    <label>Release Date</label>
                    <input type='text' placeholder='releaseDate' value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)}></input>
                </div>
                <input type='submit' className='btn btn-block' value='Save movie'></input>
            </form>
        </div>
    )
}

export default AddMovie
