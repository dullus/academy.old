import React from "react";
import Beer from "../Beer/Beer"
import styles from "./Box.module.css"

interface Props {
    name: string;
    id: number;
        
  }

  
  
  const Box: React.FC<Props> = ({name, id}) => {
  
  
      return (
        <div className={styles.box}>
        <div className={styles.tags}>
        {name} {id}
        </div>
        
        <div>
          
          
          <Beer />
        </div>
        </div>
   ); };
  
    export default Box;