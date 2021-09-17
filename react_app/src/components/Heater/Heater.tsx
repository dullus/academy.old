import styles from './Heater.module.css'
import React from 'react'


interface IProps {
    power: number;
    heatingCapacity?: number;
    // onTempChange: (t: string) => void; //toto si len posielam inde 
}

interface IState {
    temp: number; 
    turned: boolean;
}


class Heater extends React.Component<IProps, IState> {
    
    state: IState = {
        temp: 20,
        turned: false,
    };

    onTemperatureChange(ev: React.ChangeEvent<HTMLInputElement>) {  //funkcia ktora sa vola onChange
        this.setState({ temp: Number(ev.target.value)})
    }
    
    render() {
    return(
        <div className={styles.heater}>
            <p className={styles.text}>Set temperature: {this.state.temp}</p>
            <input type="range" name="temp" value={this.state.temp} onChange={(ev) => this.onTemperatureChange(ev)}/>
        </div>
    )
}
}


export default Heater;