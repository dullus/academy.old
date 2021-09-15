import React from "react";
import styles from "./Room.module.css";

interface IProps {
  power: number;
  width?: number;
  id?: number;
  onRoomTemperatureChange: (t: string) => void;
}

interface IState {
  temperature: number;
  turned: boolean;
}

class Heater extends React.Component<IProps, IState> {
  state: IState = {
    temperature: 20,
    turned: false,
  };

  onTemperatureChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      temperature: Number(event.target.value),
    });

    this.props.onRoomTemperatureChange(event.target.value);
  }

  render() {
    return (
      <div>
        <p>Power: {this.props.power}</p>
        <p>Temperature: {this.state.temperature}</p>
        <input
          type="range"
          name="temp"
          value={this.state.temperature}
          onChange={(e) => this.onTemperatureChange(e)}
        />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <div>ads</div>;
  }
}

export default Heater;
