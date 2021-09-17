import React from "react";

interface IProps {
  power: number;
  width?: number;
  id?: number;
  turned: boolean;
  temperature: number;
  onRoomTemperatureChange: (t: number) => void;
  setHeaterTurned: (t: boolean) => void;
}

class Heater extends React.Component<IProps> {
  onTemperatureChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.onRoomTemperatureChange(Number(event.target.value));
  }

  setHeaterTurned(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.setHeaterTurned(event.target.checked);
  }

  render() {
    return (
      <div>
        <p>Power: {this.props.power}</p>
        <input
          type="range"
          name="temp"
          value={this.props.temperature}
          onChange={(e) => this.onTemperatureChange(e)}
        />
        TURN HEATER
        <input
          type="checkbox"
          name="tt"
          checked={this.props.turned}
          onChange={(e) => this.setHeaterTurned(e)}
        />
      </div>
    );
  }
}

export default Heater;
