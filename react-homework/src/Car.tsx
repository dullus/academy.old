import React, { useEffect, useState } from 'react';
import './Car.css';

interface car{
    id: number;
    brand: String;
    model: String;
    yearOfMake: number;
}

const Car: React.FC = () => {

const [clicked, handleOnClick] = useState(false);

const statusMessage = () => {
  if(clicked === false){
    handleOnClick(true);
  } else {
    handleOnClick(false)
  }
}
//   const unlockMessage = () => {
//     console.log("Car unlocked")
//   }

    const [carData, fillData] = useState<car[]>([]);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/7959db8c-dea6-44f2-903c-45d2c6206f40')
        .then(response => response.json())
        .then((response) => {
            fillData(response);
        })
    }, []);

    return (
      <div className="CarBody">
        {carData.map(carData =>
        <div className ="car"> 

        Parking spot no.: {carData.id} <br/> <br/>
        {carData.brand} {carData.model}
        <br/>
        {carData.yearOfMake} 
        
        <button className = "unlockButton">
        <strong> Unlock car </strong>
        {clicked && <div>Car unlocked</div>}
        </button>

        <button className = "lockButton">
        <strong> Lock car</strong></button>
                
        </div>
        )}
        </div>   
    );
  }

export default Car;