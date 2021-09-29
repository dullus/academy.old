import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../../App";
import styles from "./Snake.module.css";

const Snake: React.FC = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const updatedContex = useContext(MyContext);

  let pox = 0;
  let poy = 0;
  function handleKeyPress(e: { key: any }) {
    if (e.key === "ArrowDown") {
      poy += 30;
      setPosY(poy);
    } else if (e.key === "ArrowRight") {
      pox += 30;
      setPosX(pox);
    } else if (e.key === "ArrowLeft") {
      pox -= 30;
      setPosX(pox);
    } else if (e.key === "ArrowUp") {
      poy -= 30;
      setPosY(poy);
    }
  }

  function updateScore() {
    let chosenPlayer: any;
    updatedContex.find((item) => {
      if (item.id === 12) {
        chosenPlayer = item.activePlayer?.id;
      }
    });
    updatedContex.find((item) => {
      if (item.id === chosenPlayer) {
        let score = item.score;
        score++;
        item.score = score;
        if (item.score === 20) {
          alert(item.name + " won!!!!");
        }
      }
    });
  }

  function collision(x: number, y: number, data: any[]) {
    let index = -1;
    data.find((item) => {
      if (item.id === 9) {
        item.appleArr.map(
          (newItem: { id: number; eaten: boolean; x: number; y: number }) => {
            if (newItem.x === posX && newItem.y === posY) {
              newItem.eaten = true;
              index = newItem.id;
              updateScore();
            }
          }
        );
        const temp = item.appleArr.filter(function (el: { id: number }) {
          return el.id != index;
        });
        item.appleArr = temp;
      }
    });
  }

  function updatePosition(data: any[]) {
    data.find((item) => {
      if (item.id === 10) {
        item.snakePos.x = posX;
        item.snakePos.y = posY;
      }
    });
    collision(posX, posY, data);
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <MyContext.Consumer>
      {(data) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            left: posX,
            top: posY,
            width: 30,
            height: 30,
            border: "1px solid red",
            background: "red",
            fontSize: "15px",
            textAlign: "center",
          }}
        >
          Had
          {updatePosition(data)}
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Snake;
