import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { IoBeerOutline } from 'react-icons/io5';
import styles from "./Beer.module.css"



interface IState {
    empty?: boolean;
}

class Beer extends React.Component<IState>{
    
    

    state: IState = {
        empty: true,
      };


      drinkBeer(ev: React.MouseEvent) {
        if (this.state.empty === false) {
            this.setState({empty: true});
            console.log(this.state.empty)
    
        } else {
            this.setState({empty: false});
            console.log(this.state.empty)
        }
    }
    render() {
        const beer = this.state.empty ? <FaBeer /> : <IoBeerOutline /> ;
        const text = this.state.empty ? "Order Beer" : "Drink Beer";
    
        return (
          <div >
            <div className={styles.beer}>{beer}</div>
            <div className={styles.btn} >
            <button onClick={(ev) => {this.drinkBeer(ev)}}>{text}</button>
            </div>
          </div>
        );
      }
    }



export default Beer;