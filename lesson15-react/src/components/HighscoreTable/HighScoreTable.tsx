import React, { useContext, useState } from "react";
import { MyContext } from "../../App";
import styles from "./HighScoreTable.module.css";

const HighScoreTable: React.FC = () => {
  const players = useContext(MyContext);
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        left: 800,
        top: 100,
        width: 300,
        height: 300,
        border: "3px solid black",
      }}
    >
      <div className={styles.sebojefrajer}>
        <div>HighScore</div>
        {players.map((item) => {
          if (item.id) {
            return (
              <div key={item.id}>
                {item.name} {item.score}{" "}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default HighScoreTable;
