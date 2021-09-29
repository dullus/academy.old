import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../App";
import styles from "./HighScoreTable.module.css";

const HighScoreTable: React.FC = () => {
  const [playerScore, setPlyerScore] = useState<number[]>([]);
  const updatedContex = useContext(MyContext);

  useEffect(() => {
    const interval = setInterval(() => {
      daco();
    }, 300);
    return () => {
      clearInterval(interval);
    };
  });

  function daco() {
    let tempScore = [...playerScore];
    updatedContex.map((item) => {
      if (item.id < 9) {
        tempScore[item.id] = item.score;
      }
    });
    setPlyerScore(tempScore);
  }

  return (
    <MyContext.Consumer>
      {(data) => (
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
            {data.map((item) => {
              if (item.id) {
                return (
                  <div key={item.id}>
                    {item.name} {playerScore[item.id]}{" "}
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default HighScoreTable;
