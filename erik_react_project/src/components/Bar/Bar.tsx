import React, { useState, useEffect } from "react";
import Box from "../Box/Box";
import styles from "./Bar.module.css"

interface bar{
  id:number;
  name:string;
}

const Bar: React.FC = () => {


const [barData, fillData] = useState<bar[]>([]);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/c83f2a0d-8caf-4629-8ddf-c2aadb97f84e')
    .then(response => response.json())
    .then((response) => {
        fillData(response);
    })
}, []);  


  
    // const boxes = [
    //   {id: 1, name: 'Box'},
    //   {id: 2, name: 'Box'},
    //   {id: 3, name: 'Box'},
      
    // ]
  
    
  
    return (
      <div className={styles.bar}>
      {console.log(barData)}
      {barData.map((boxes =>  (
      <Box name={boxes.name} id={boxes.id}  />
      )))}
  
      
      
      </div>
      
    );
  }
  
  export default Bar;