import styles from './AirConditioning.module.css'
import React from 'react'

interface IProps {
    power?: number,
}

interface IState {
    turned: boolean,
    intensity: number,
}

class AirConditioning extends React.Component<IProps, IState> {
    state: IState = {
        turned: false,
        intensity: 1,
    };


    turnOnAirConditioning(ev: React.MouseEvent) {
        if (this.state.turned === false) {
            this.setState({turned: true})
        } else {
            this.setState({turned: false})
        }
    }


    setIntensity(ev: React.MouseEvent) {
        if (this.state.intensity === 1) {
            this.setState({intensity: 2})
        } else if(this.state.intensity === 2) {
            this.setState({intensity: 3}) 
        } else if(this.state.intensity === 3) {
            this.setState({intensity: 1})
        }
    }

    render() {
   
        const text = this.state.turned ? "Turn ON Air-Conditioning" : "Turn OFF Air-Conditioning"
        const airConditioningState = this.state.turned ? "On" : "Off"

        const snowflake = () => {
            if (this.state.intensity === 1) {
                return <span>❄</span>
            } else if (this.state.intensity === 2) {
                return <span>❄❄</span>
            } else if (this.state.intensity === 3) {
                return <span>❄❄❄</span>
            }
        }

        return(
            <div className={styles.airConditioning}>
                <div className={styles.onOffWrapper}>
                    <button className={styles.buttonTurnOnOff} onClick={(ev) => {this.turnOnAirConditioning(ev)}}>{text}</button>
                    <p className={styles.airConditioningState}>AC: {airConditioningState}</p>
                </div>
                <div className={styles.intensityWrapper}>
                    <button className={styles.buttonIntensity} onClick={(ev) => {this.setIntensity(ev)}}>Set intensity: </button>
                    <p className={styles.snowflake}>{snowflake()}</p>
                </div>
            </div>
        );
    }

}


export default AirConditioning;