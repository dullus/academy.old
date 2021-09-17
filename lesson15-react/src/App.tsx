import React, { useEffect, useReducer, Dispatch, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.css";
import Room from "./components/Room";
import temperatureReducer, { IState } from "./reducers/temperatureReducer";
import { http } from "./request";

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
  dispatch: Dispatch<IActions>;
}

export const MyContext = React.createContext({} as IContext);

const App: React.FC = () => {
  // Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState.

  // const [data, dispatch] = useReducer(temperatureReducer, initialState);

  const [data, setData] = useState<IState>({ temperature: 0 });

  useEffect(() => {
    fetch("http://asdas.sk")
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => console.log(error));
    // dispatch({ type: "FETCH_SUCCESS", payload: response.json });
  }, []); // The empty array causes this effect to only run on mount

  const owner: string = "Erik";

  const rooms = [
    { id: 1, name: "one", color: "green", hasLight: true },
    { id: 2, name: "two", color: "yellow", hasLight: false },
    { id: 3, name: "three", color: "red", hasLight: true },
    { id: 4, name: "four", color: "blue", hasLight: false },
  ];

  return (
    <MyContext.Provider value={{ data, dispatch }}>
      {/* React Fragment */}
      <div>Temperature: {data.temperature}</div>
      <button onClick={() => dispatch({ type: "INCREASE_TEMPERATURE" })}>
        INCREASE FROM THE APP
      </button>
      <div className="App">
        <img src={logo} alt="React logo" width="100" height="100" />
        {owner}'s FLAT
        <div className={styles.rooms}>
          {rooms.map((room) => (
            <Room
              key={room.id}
              name={room.name}
              color={room.color}
              hasLight={room.hasLight}
            />
          ))}
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default App;
