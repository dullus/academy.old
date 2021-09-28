import React, { useContext, useState } from 'react'
// import { MyContext } from 'src/App'
import styles from '../Searchbar/Searchbar.module.css'

interface IProps {
setSearchTerm?: any
}

const Searchbar: React.FC<IProps> = ({setSearchTerm}) => {

    // const dogData = useContext(MyContext).map(data => data.breed)

    

    return(
        <div className={styles.searchbarWrapper}>
            <input onChange={ev => setSearchTerm()} className={styles.searchbar} type="text" placeholder="Search by breed..." />
            
        </div>
    )
}

export default Searchbar;