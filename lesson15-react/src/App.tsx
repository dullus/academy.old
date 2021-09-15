import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.css";
import Room from "./components/Room";

const App: React.FC = () => {
  const owner: string = "Erik";

  const rooms = [
    { id: 1, name: "one", color: "green", hasLight: true },
    { id: 2, name: "two", color: "yellow", hasLight: false },
    { id: 3, name: "three", color: "red", hasLight: true },
    { id: 4, name: "four", color: "blue", hasLight: false },
  ];

  return (
    <>
      {/* React Fragment */}
      <div>Erik</div>
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
    </>
  );
};

export default App;
