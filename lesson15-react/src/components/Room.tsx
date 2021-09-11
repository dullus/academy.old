interface Props {
  name: string;
  id?: number;
}


// import styles from "./Room.module.css";
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


const Room: React.FC<Props> = ({ name, id }) => {
  return (
    <div className="Room">
      I am the room
      {name}
      {id}
    </div>
  );
};

export default Room;
