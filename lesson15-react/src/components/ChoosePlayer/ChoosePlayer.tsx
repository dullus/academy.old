import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../App";
import styles from "./ChoosePlayer.module.css";
const ChoosePlayer: React.FC = () => {
  function send(data: any[], id: number) {
    data.find((item) => {
      if (item.id === 12) {
        item.activePlayer = { id: id };
      }
      if (item.id === 13) {
        item.chosen = true;
      }
    });
    alert("are you ready ?");
  }

  return (
    <MyContext.Consumer>
      {(data) => (
        <div>
          <button onClick={() => send(data, 1)}>Stano</button>
          <button onClick={() => send(data, 2)}>Sebo</button>
          <button onClick={() => send(data, 3)}>Stevo</button>
          <button onClick={() => send(data, 4)}>Pali</button>
          <button onClick={() => send(data, 5)}>Dano</button>
          <button onClick={() => send(data, 6)}>Tina</button>
          <button onClick={() => send(data, 7)}>Kiko</button>
          <button onClick={() => send(data, 8)}>Erik</button>
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default ChoosePlayer;
