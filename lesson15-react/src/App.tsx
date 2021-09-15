import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Room from "./components/Room";

const App: React.FC = () => {
  const color: string = "yellow";

  const rooms = [
    { id: 1, name: "jedna" },
    { id: 2, name: "dva" },
    { id: 3, name: "tri" },
    { id: 4, name: "styri" },
  ];

  return (
    <> {/* React Fragment */ }
      <div>Erik</div>
      <div className="App">
        <img src={logo} alt="React logo" width="100" height="100"/>
        FLAT {color}
        {rooms.map((room) => (
          <Room name={room.name} />
        ))}
      </div>
    </>
  );
};

export default App;
