import React from "react";

import styles from '../FilterButton/FilterButton.module.css'

interface IProps {
  isPressed?: boolean
  setFilter?: any
  name?:string
}

const FilterButton: React.FC<IProps> = ({isPressed, setFilter, name}) => {

    return(
         <button className={styles.btn} aria-pressed={isPressed} onClick={() => setFilter(name)}>
           {name}
           </button>
    );
}

export default FilterButton;