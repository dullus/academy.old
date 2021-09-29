import './App.css';
import styles from './App.module.css'
import Profile from './components/Profile/Profile'
// import Searchbar from './components/Searchbar/Searchbar';
import Filters from './components/FilterButton/FilterButton'
import Form from './components/Form/Form';
import React, { useEffect, useState, createContext } from 'react'

interface IState { 
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
  
  const [dogs, setDogs] = useState<IState[]>([]);
  const [filter, setFilter] = useState('All')
  // const [filteredDogIDs, setFilteredDogIds] = useState<IState[]>([])

  const FILTERS = {
    All: () => true,
    Adult: dog => dog.age >= 1,
    Puppy: dog => dog.age < 1,
    Male: dog => dog.sex === "Male",
    Female: dog => dog.sex === "Female"
  }
  
  const FILTER_NAMES: any = Object.keys(FILTERS)

  const listOfFilters = FILTER_NAMES.map(name => 
    <Filters key={name} name={name} isPressed={name === filter} setFilter={setFilter}/>)

  const filteredData = dogs.filter(FILTERS[filter])

  let lastDogId = dogs.length + 1

  function addDog(name, age, img, breed, sex, weight, height, color) {
    console.log(sex)
    const newDog = {
      key: lastDogId++,
      id: lastDogId++, 
      name: name, 
      age: age,
      img: img,
      breed: breed,
      sex: sex,
      weight: weight,
      height: height,
      color: color
    }
    setDogs([...dogs, newDog])
  }

  // function searchByBreed(searchTerm) {
  //   setFilter('All')
  //   filteredData.filter(dog => {
  //       if(searchTerm === "") {
  //         console.log(dog.id)
  //         return
  //         (
  //           <Profile id={dog.id}/>
  //         )

  //       } else if (dog.breed.toLowerCase().includes(searchTerm.toLowerCase())) {
  //         console.log(dog.id)
  //         return (
  //           <Profile id={dog.id}/>
  //         )
  //       }
  //   }) }
 
    useEffect(() => {
        fetch('https://run.mocky.io/v3/33f27ea7-5915-4e36-a7b8-ceeb7baa4482')
        .then((resp) => resp.json())
        .then((resp) => {
            setDogs(resp)
        })

    }, []);

  return (
    <MyContext.Provider value={dogs}>
    <div className={styles.bckgImage} >
      <h1 className={styles.heading}>The Pawsome Animal Rescue</h1>
      <p>Check out these LOVELY doggos currently looking for their forever home:</p>
        <div className={styles.filters}>  
          {listOfFilters}
        </div>
      <div className={styles.profiles}>
        {filteredData.map(dog => (<div>
          <Profile key={dog.id} id={dog.id}/>
        </div>))}
      </div>
      <Form key="form" addDog={addDog}/>
    </div>
    </MyContext.Provider>
    );
}

export default App;
