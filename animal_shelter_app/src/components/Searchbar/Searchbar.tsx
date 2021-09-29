import React, { useContext, useState } from 'react'
import { MyContext } from '../../App'
import Profile from '../Profile/Profile'
import styles from '../Searchbar/Searchbar.module.css'

interface IProps {
setSearchTerm?: any
searchByBreed: any
}

const Searchbar: React.FC<IProps> = ({searchByBreed}) => {

     const dogData = useContext(MyContext).map(data => data)
     const [searchTerm, setSearchTerm] = useState('')

     function handleOnChange(ev) {
         setSearchTerm(ev.target.value)
         console.log(searchTerm)
     }

     function handleSubmit(ev) {
         ev.preventDefault();
         if (searchTerm !== '') {
            searchByBreed(searchTerm);
            console.log(searchTerm)
            setSearchTerm('');
         }
     }

    return(
        <form className={styles.searchbarWrapper} onSubmit={handleSubmit} >
            <input onChange={handleOnChange} className={styles.searchbar} type="text" placeholder="Search by breed..." />
        </form>
    )
}

export default Searchbar;