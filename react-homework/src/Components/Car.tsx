import React, { useEffect, useState } from 'react';
import styles from './Car.module.css';

interface car{
    id: number;
    brand: String;
    model: String;
    yearOfMake: number;
}

const Car: React.FC = () => {

const [clicked, handleOnClick] = useState([false,false,false,false,false]);
const [statusText, setStatusText] = useState(["Car unlocked", "Car unlocked", "Car unlocked","Car unlocked","Car unlocked"]) 

function statusMessageUnlock(id:number){
const newStatuses = [...clicked]; // clone
const oooo = [...statusText] 
newStatuses[id] = !newStatuses[id]; // true = false, false = true
console.log(newStatuses)

if(newStatuses[id]){
  oooo[id] = "Car Locked"
} else {
  oooo[id] = "Car unlocked"
}

setStatusText(oooo)
handleOnClick(newStatuses);

let trueValue = false;
let count = 0;

newStatuses.map(item => {
  console.log(item)
  if(!item){
    trueValue = false;
    return 
  } else {
    trueValue = true;
    count++
  }
})

console.log(count)
if(count === 5) {
  setStatus("Carpark is safe, cars are all locked")
} else {
  setStatus("Carpark not safe! Some cars are unlocked!")
}}

const [status, setStatus] = useState("Carpark not safe! Some cars are unlocked!")

const [carData, fillData] = useState<car[]>([]);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/7959db8c-dea6-44f2-903c-45d2c6206f40')
        .then(response => response.json())
        .then((response) => {
            fillData(response);
        })
    }, []);

    return (
      <div className={styles.CarBody}>
        {console.log(clicked)}
        {carData.map(carData =>
        <div className ={styles.car}> 
        Parking spot no.: {carData.id} <br/> <br/>
        <strong>{carData.brand} {carData.model}</strong>
        {carData.yearOfMake} <br/>
        
        <button className = {styles.unlockButton} onClick={() => statusMessageUnlock(carData.id - 1)}>
        <strong> Unlock/Lock car </strong>
        
        </button>
         <br/><br/>
        {statusText [carData.id - 1]}
        </div> 
        )} 
        <div className ={styles.carPark}>
        {status}</div>
        </div>   
    );
  }

export default Car;