import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../../App";
import styles from "./Snake.module.css";
interface Props {
  positionX: number;
  positionY: number;
  onPositionChange: (pox: number, poy: number) => void;
}

const Snake: React.FC<Props> = () => {
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

  function collision(x: number, y: number, data: any[]) {
    data.find((item) => {
      if (item.id === 11) {
        if (item.mongoosePos.x === x && item.mongoosePos.y === y) {
          // alert("YOU LOST");
        }
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
