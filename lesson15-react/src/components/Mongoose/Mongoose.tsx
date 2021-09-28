import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../../App";

interface Props {
  snakeX: number;
  snakeY: number;
  onMongoosePositionChange: (pox: number, poy: number) => void;
}

const Mongoose: React.FC<Props> = ({
  snakeX,
  snakeY,
  onMongoosePositionChange,
}) => {
  const [posX, setPosX] = useState(210);
  const [posY, setPosY] = useState(210);

  const updatedContex = useContext(MyContext);

  let pox: number;
  let poy: number;
  let snakeXa: number;
  let snakeYa: number;
  useEffect(() => {
    pox = posX;
    poy = posY;
    const interval = setInterval(() => {
      if (snakeX - posX >= 0) {
        pox += 30;
      } else pox -= 30;
      setPosX(pox);
      if (snakeY - poy >= 0) {
        poy += 30;
      } else poy -= 30;
      setPosY(poy);
    }, 500);
    updatedContex.find((item) => {
      if (item.id === 11) {
        item.mongoosePos = { x: posX, y: posY };
      }
    });
    return () => {
      clearInterval(interval);
    };
  });

  // useEffect(() => {
  //   pox = posX;
  // const interval = setInterval(() => {
  //   if (snakeX - posX >= 0) {
  //     pox += 30;
  //   } else pox -= 30;
  //   setPosX(pox);
  //   // handleWin();
  //   return () => {
  //     onMongoosePositionChange(pox, poy);
  //     clearInterval(interval);
  //   };
  // }, 150);

  // }, []);

  // useEffect(() => {
  //   poy = posY;
  //   const interval = setInterval(() => {
  //     if (snakeY - poy >= 0) {
  //       poy += 30;
  //     } else poy -= 30;
  //     setPosY(poy);
  //     handleWin();
  //   }, 150);
  //   return () => {
  //     onMongoosePositionChange(pox, poy);
  //     clearInterval(interval);
  //   };
  // }, []);

  function handleWin() {
    const one = snakeX - pox;
    const two = snakeY - poy;
    // if (one === 0 && two === 0) {
    //   alert("YOU LOST");
    //   window.location.reload();
    // }
  }

  return (
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
  );
};

export default Mongoose;
