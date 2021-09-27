import React, { useEffect, useState } from 'react';
import styles from './Car.module.css';

interface car{
    id: number;
    brand: String;
    model: String;
    yearOfMake: number;
}

const Car: React.FC = () => {

const [clicked, handleOnClick] = useState(false);

const statusMessageUnlock = () => {
  if(clicked === false){
    handleOnClick(true);
  } else {
    handleOnClick(false)
  }
}

const text = clicked ? "Car unlocked" : "Car locked";

const carParkText = clicked ? "Carpark not safe! Some cars are unlocked!" : "Carpark is safe, cars are all locked";

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
        {carData.map(carData =>
        <div className ={styles.car}> 
        
        Parking spot no.: {carData.id} <br/> <br/>
        <strong>{carData.brand} {carData.model}</strong>
        {carData.yearOfMake} <br/>
        
        <button className = {styles.unlockButton} onClick={statusMessageUnlock}>
        <strong> Unlock/Lock car </strong>
        
        </button>
         <br/><br/>
        {text}
        </div> 
        )} 
        <div className ={styles.carPark}>
        {carParkText}</div>
        </div>   
    );
  }

export default Car;