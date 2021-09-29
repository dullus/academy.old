import { useEffect, useState } from 'react';
import './App.css';
import ExternalMovieFilter from './components/ExternalMovieFilter';
import MyMovieList from "./components/MyMovieList";
import AddMovie from "./components/AddMovie";
import Header from "./components/Header";


export interface IMovieData {
  id: number
  title: string
  overview: string
  voteAverage: number
  releaseDate: string
}
export interface IExternalMovieData extends IMovieData {
  disable: boolean
}

function App() {
  const urlMovies = 'https://api.themoviedb.org/3/movie/top_rated?api_key=622d2f13fea0c83888f3ea06fc558cba';
  const [externalMovies, setExternalMovies] = useState<IExternalMovieData[]>([]);

  const [myMovies, setMyMovies] = useState<IMovieData[]>([
    {
      id: 2554,
      title: "LOTR",
      overview: " Best movie ever  ",
      voteAverage: 10,
      releaseDate: "24-02-2002",
    }
  ]);
  useEffect(() => {
    const dataFromStore = localStorage.getItem("watch-movies");
    if (dataFromStore) {
      setMyMovies(JSON.parse(dataFromStore))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("watch-movies", JSON.stringify(myMovies));
  });
  const formatText = (str: string, start: number, end: number): string => {
    return str.substr(start, end)
  }
  const formatExternalMoviesData = (data: any[]): IExternalMovieData[] => {
    return data.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        overview: formatText(movie.overview, 0, 90),
        voteAverage: movie.vote_average,
        releaseDate: movie.release_date,
        disable: false
      }
    })
  }
  const [showInputs, setShowInputs] = useState(false);

  const addMovie = (movie: any) => {
    /// high id because need uniqe
    const id = Math.floor(Math.random() * 100000000) + 1;
    const newMovie = { id, ...movie };
    setMyMovies([...myMovies, newMovie]);
  };
  const deleteMovie = (id: number): any => {
    const myMoviesSet = myMovies.filter((movie) => movie.id !== id)
    const externalMovie = externalMovies.find((externalMovieItem) => {
      return externalMovieItem.id === id;
    })
    if (externalMovie) {
      externalMovie.disable = false;
    }
    setMyMovies(myMoviesSet);
  };

  const getExternalData = async () => {
    const resp = await fetch(urlMovies);
    const data = await resp.json()
    setExternalMovies(formatExternalMoviesData(data.results))
  }
  const addToMyMovies = (id: number) => {
    const externalMovie = externalMovies.find((externalMovieItem) => {
      return externalMovieItem.id === id;
    })
    if (externalMovie) {
      externalMovie.disable = true;
      // console.log(externalMovie)
      setMyMovies([...myMovies, externalMovie]);

    }
  }
  useEffect(() => {
    getExternalData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header
          showInputs={showInputs}
          title="Add own movie to watch list"
          buttonTogle={() => setShowInputs(!showInputs)}
        ></Header>
        {showInputs && <AddMovie onAdd={addMovie}></AddMovie>}
        {myMovies.length > 0 ? (
          <MyMovieList movies={myMovies} onDelete={deleteMovie}></MyMovieList>
        ) : (
          "no movies"
        )}
      </div>
      <h1>Search movie in top rated list(API)</h1>
      <ExternalMovieFilter addToMyMovies={addToMyMovies} movies={externalMovies}></ExternalMovieFilter>
    </div>
  );
}

export default App;
