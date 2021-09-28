import './App.css';
import styles from './App.module.css'
import Profile from './components/Profile/Profile'
import Searchbar from './components/Searchbar/Searchbar';
import Filters from './components/FilterButton/FilterButton'
import React, { useEffect, useState, createContext } from 'react'

interface IState { 

  adult: boolean;
  id: number;
  name: string;
  age: number;
  img: string;
  breed: string;
  sex: string;
  weight: number;
  height: number;
  color: string; 
}

export const MyContext = createContext<IState[]>([]);

const App: React.FC = () => {
  
  const [dataToBeFiltered, setDataToBeFiltered] = useState<IState[]>([]);
  const [filter, setFilter] = useState('All')
  
  const [filteredDogs, setFilteredDogs] = useState<{}>([])

  const FILTERS = {
    All: () => true,
    Adult: dog => dog.adult,
    Puppy: dog => !dog.adult,
    Male: dog => dog.sex === "Male",
    Female: dog => dog.sex === "Female"

  }
  
  const FILTER_NAMES: any = Object.keys(FILTERS)

  
  const listOfFilters = FILTER_NAMES.map(name => 
    <Filters key={name} name={name} isPressed={name === filter} setFilter={setFilter}/>)

 

  function searchByBreed(searchTerm) {
    dataToBeFiltered.filter(dog => {
        if(searchTerm === "") {
          // console.log(dog)
          setFilteredDogs(dog)
          console.log(filteredDogs)   //array je prazdny ????
        } else if (dog.breed.toLowerCase().includes(searchTerm.toLowerCase())) {
          // console.log(dog)
          setFilteredDogs(dog)
          console.log(filteredDogs)

        }
    }) }

  
  
    useEffect(() => {
        fetch('https://run.mocky.io/v3/33f27ea7-5915-4e36-a7b8-ceeb7baa4482')
        .then((resp) => resp.json())
        .then((resp) => {
            setDataToBeFiltered(resp)
        })

    }, []);

  return (
    <MyContext.Provider value={dataToBeFiltered}>
    <div className={styles.bckgImage} style={{backgroundImage: `url(https://static.wixstatic.com/media/fe94e7_186791bbc379415eb6b6777b782e7d7d~mv2.jpg/v1/fill/w_640,h_816,al_c,q_85,usm_0.66_1.00_0.01/fe94e7_186791bbc379415eb6b6777b782e7d7d~mv2.webp)`}}>
      <h1 className={styles.heading}>The Pawsome Animal Rescue</h1>
      <p>Check out these LOVELY doggos currently looking for their forever home:</p>
      <Searchbar searchByBreed={searchByBreed}
       
      />
      <div className={styles.filters}>  
        {listOfFilters}
      </div>
      <div className={styles.profiles}>
      {dataToBeFiltered.filter(FILTERS[filter]).map(dog => (
        <div>
          <Profile id={dog.id} key={dog.id}/>
        </div>
      ))}
      </div>
    </div>
    </MyContext.Provider>
    );
}


export default App;
