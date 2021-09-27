import {
  createContext,
  useEffect,
  useReducer,
  Dispatch,
  useState,
  SetStateAction,
} from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.css";
import Room from "./components/Room";
import temperatureReducer, { IState } from "./reducers/temperatureReducer";

// uloha - pridat fetch load start a fetch load end indicator - napriklad pre loading icon

const initialState: IState = {
  temperature: 24,
};

interface IActions {
  type: string;
  payload?: any;
}

interface IContext {
  data: IState;
  setData: Dispatch<SetStateAction<IState>>;
  // dispatch: Dispatch<IActions>;
}

export const MyContext = createContext({} as IContext);

const App: React.FC = () => {
  // Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState.

  // const [data, dispatch] = useReducer(temperatureReducer, initialState);

  const [data, setData] = useState<IState>({ temperature: 0 });

  // https://designer.mocky.io/manage/delete/4ce1b83e-4ba5-4274-b292-c988d0c62b25/YTTL8AbD5ysts52EWujcwjviPHdMQqTI53L5
  useEffect(() => {
    fetch("https://run.mocky.io/v3/4ce1b83e-4ba5-4274-b292-c988d0c62b25")
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => console.log(error));
    // dispatch({ type: "FETCH_SUCCESS", payload: response.json });

    // returned function will be called on component unmount
    return () => {
      alert("just cleaning up..");
    };
  }, []); // The empty array causes this effect to only run on mount

  const rooms = [
    { id: 1, name: "one", color: "grey" },
    { id: 2, name: "two", color: "grey" },
    { id: 3, name: "three", color: "grey" },
  ];

  return (
    <MyContext.Provider value={{ data, setData }}>
      {/* React Fragment */}
      {/* <div>Temperature from data: {data.temperature}</div> */}
      <div
        className="App"
        style={{
          backgroundImage: `url(https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg)`,
          height: `120vh`,
          width: `100%`,
          margin: `auto`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
      >
        <img src={logo} alt="React logo" width="200" height="200" />
        <div className={styles.header}> This is basic react App</div>
        <div className={styles.rooms}>
          {rooms.map((room) => (
            <Room id={room.id} name={room.name} color={room.color} />
          ))}
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default App;
