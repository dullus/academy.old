import React from "react";

import styles from '../FilterButton/FilterButton.module.css'

interface IState {
  filterNames?: []
  isPressed?: boolean
  setFilter?: any
  name?:string
  filter?: string;
  
}

const FilterButton: React.FC<IState> = ({filterNames, isPressed, setFilter, name, filter}) => {

  
   

    return(
              
         <button className={styles.btn} aria-pressed={isPressed} onClick={() => setFilter(name)}>
           {name}
           </button>
        
    );
}

export default FilterButton;