import styles from './Light.module.css'
import {MouseEvent} from 'react'
import React from 'react'
import { render } from '@testing-library/react';

interface IProps {
    power: number;
}

interface IState {
    turned: boolean; 
    
}


class Light extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    
        this.handleClick = this.handleClick.bind(this);
      }
  
    state: IState = {
      turned: false,
    };
  
    handleClick() {
        console.log(this)
    }

    switchLight(ev: React.MouseEvent) {
        if (this.state.turned === false) {
            this.setState({turned: true});
            console.log(this.state.turned)
    
        } else {
            this.setState({turned: false});
            console.log(this.state.turned)
        }
    }
    
  
    render() {
      const bulb = this.state.turned ? "💡" : "-";
      const text = this.state.turned ? "Turn OFF the light" : "Turn ON the light";
  
      return (
        <div className={styles.light}>
          <button className={styles.button} onClick={(ev) => {this.switchLight(ev)}}>{text}</button>
          <div className={styles.bulb}>{bulb}</div>
        </div>
      );
    }
  }




export default Light;