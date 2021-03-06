import React from "react";
import styles from "./Light.module.css";

interface Props {
  power: number;
  id?: number;
  color?: string;
}

interface State {
  turned: boolean;
}

class Light extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log("Constructing...");

    this.handleClickButton = this.handleClickButton.bind(this);
  }

  componentDidMount() {
    console.log("Mounted");
  }

  componentWillUnmount() {
    console.log("Unmounting...");
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  state: State = {
    turned: false,
  };

  handleTurn(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      turned: e.target.checked,
    });
  }

  handleClickButton() {
    console.log(this);
  }

  render() {
    console.log("RENDER");
    const bulb = this.state.turned ? "💡" : "-";

    return (
      <div className={styles.light}>
        <button onClick={this.handleClickButton}>SWITCH</button>
        {bulb}, power: {this.props.power}
        <input type="checkbox" onChange={(e) => this.handleTurn(e)} />
      </div>
    );
  }
}

// const Light: React.FC<Props> = ({ id, color, power }) => {
//   return <div className={styles.light}>💡, power: {power}</div>;
// };

export default Light;
