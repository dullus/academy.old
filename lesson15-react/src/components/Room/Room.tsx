import Light from "../Light";
import Heater from "../Heater";
import styles from "./Room.module.css";

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
  const onRoomTemperatureChange = (temperature: string) => {
    console.log(temperature);
  };

  return (
    <div className={`${styles.room} ${styles[color]}`}>
      {`I am the room ${name}`}
      {id}
      {hasLight && <Light power={40} />}
      <Heater power={300} onRoomTemperatureChange={onRoomTemperatureChange} />
    </div>
  );
};

export default Room;
