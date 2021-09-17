import Light from "../Light";
import Heater from "../Heater";
import styles from "./Room.module.css";
import { useState, useContext } from "react";
import { MyContext } from "../../App";

interface Props {
  name: string;
  id?: number;
  color: string;
  hasLight: boolean;
}

// interface State = {
//   count: number;
// };

// class App extends React.Component<MyProps, MyState> {
//   state: MyState = {
//     count: 0,
//   };
//   render() {
//     return (
//       <div>
//         {this.props.message} {this.state.count}
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return <div>ads</div>;
//   }
// }

const Room: React.FC<Props> = ({ name, id, color, hasLight }) => {
  const [temperature, setTemperature] = useState(22);
  const [heaterTurned, setHeaterTurned] = useState(false);

  const { data, dispatch } = useContext(MyContext);

  const onRoomTemperatureChange = (temperature: number) => {
    setTemperature(temperature);
  };

  return (
    <div className={`${styles.room} ${styles[color]}`}>
      {`I am the room ${name}`}
      TEMPERATURE FROM CONTEXT (PARENT) - {data.temperature}
      <button onClick={() => dispatch({ type: "INCREASE_TEMPERATURE" })}>
        INCREASE FROM THE ROOM
      </button>
      {id}
      {hasLight && <Light power={40} />}
      Temperature: {temperature}
      <Heater
        turned={heaterTurned}
        temperature={temperature}
        power={300}
        onRoomTemperatureChange={onRoomTemperatureChange}
        setHeaterTurned={setHeaterTurned}
      />
    </div>
  );
};

export default Room;
