import styles from './App.module.css'
import {MouseEvent} from 'react'

interface IProps {
    power: number;
    heatingCapacity: number;
}

interface State {
    temp: number; 
    
}


const Heater: React.FC<IProps> = ({power}, {heatingCapacity}) => {

    return(
        <div className={styles.heater}>
            Heater: Set temperature
            <input type="range" name="Light" value={power} onChange={(ev) => ev.target.value}/>
        </div>
    )
}



export default Heater;