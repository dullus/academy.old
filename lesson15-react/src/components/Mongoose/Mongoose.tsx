import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../../App";

// interface Props {
//   snakeX: number;
//   snakeY: number;
//   onMongoosePositionChange: (pox: number, poy: number) => void;
// }

const Mongoose: React.FC = () => {
  const [posX, setPosX] = useState(210);
  const [posY, setPosY] = useState(210);

  const updatedContex = useContext(MyContext);

  let pox: number;
  let poy: number;

  let snakeX = 0;
  let snakeY = 0;

  function getSnakeX(data: any[]) {
    data.find((item) => {
      if (item.id === 10) {
        snakeX = item.snakePos.x;
      }
    });
  }

  function getSnakeY(data: any[]) {
    data.find((item) => {
      if (item.id === 10) {
        snakeY = item.snakePos.y;
      }
    });
  }
  useEffect(() => {
    pox = posX;
    poy = posY;
    const interval = setInterval(() => {
      getSnakeX(updatedContex);
      getSnakeY(updatedContex);
      if (snakeX - posX >= 0) {
        pox += 30;
      } else pox -= 30;
      setPosX(pox);
      if (snakeY - poy >= 0) {
        poy += 30;
      } else poy -= 30;
      setPosY(poy);
    }, 200);
    updatedContex.find((item) => {
      if (item.id === 11) {
        item.mongoosePos = { x: posX, y: posY };
      }
    });
    return () => {
      clearInterval(interval);
    };
  });

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
            border: "1px solid blue",
            background: "blue",
            fontSize: "15px",
            textAlign: "center",
          }}
        >
          Zabijak hadov
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Mongoose;
