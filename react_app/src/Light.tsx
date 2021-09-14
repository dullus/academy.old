import styles from './App.module.css'
import {MouseEvent} from 'react'

interface IProps {
    power: number;
}

interface State {
    turnedOn: false; 
    
}


const Light: React.FC<IProps> = ({power}) => {


    return(
        <div className={styles.light}>
            <label>Turn ON</label>
            <input type="checkbox" name="Light"/>
        </div>
    )
}



export default Light;