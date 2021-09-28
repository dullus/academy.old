import React, { useContext, useEffect, useState } from "react";
import Ground from "../Ground/Ground";
import Snake from "../Snake/Snake";
import Apple from "../Apple/Apple";
import Mongoose from "../Mongoose/Mongoose";
import { MyContext } from "../../App";

const Playfield: React.FC = () => {
  const [appleArray, setAppleArray] = useState<
    { eaten: boolean; x: number; y: number }[]
  >([]);
  const [snakeX, setSnakeX] = useState(0);
  const [snakeY, setSnakeY] = useState(0);

  const updatedContex = useContext(MyContext);

  let numberOfGrounds: {
    key: number;
    posX: number;
    posY: number;
  }[] = [];

  let apples: { eaten: boolean; x: number; y: number }[] = [];
  let temp: { eaten: boolean; x: number; y: number }[] = [];

  let id = 0;
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      numberOfGrounds.push({ key: id, posX: j * 30, posY: i * 30 });
      id++;
    }
  }
  let arr: number[] = [];
  function randomApples() {
    const randomN = Math.floor(Math.random() * numberOfGrounds.length);
    if (!arr.includes(randomN)) {
      arr.push(randomN);
    } else randomApples();
  }

  for (let i = 0; i < 20; i++) {
    randomApples();
  }

  useEffect(() => {
    numberOfGrounds.forEach((el) => {
      if (arr.includes(el.key)) {
        apples.push({ eaten: false, x: el.posX, y: el.posY });
        temp.push({ eaten: false, x: el.posX, y: el.posY });
      }
    });
    setAppleArray(temp);
  }, []);

  function onMongoosePositionChange(x: number, y: number) {
    // console.log(x, y);
  }

  function onPositionChange(x: number, y: number) {
    setSnakeY(y);
    setSnakeX(x);
  }

  updatedContex.find((item) => {
    if (item.id === 9) {
      item.appleArr = appleArray;
    }
  });

  return (
    <div
      style={{
        position: "absolute",
        width: 750,
        height: 750,
        background: "gray",
      }}
    >
      {numberOfGrounds.map((item) => {
        return (
          <Ground
            index={item.key}
            positionX={item.posX}
            positionY={item.posY}
          />
        );
      })}
      {/* {appleArray.map((item) => {
        return <Apple positionX={item.x} positionY={item.y} />;
      })} */}
      {updatedContex.map((item) => {
        if (item.id === 9) {
          item.appleArr?.map((newItem) => {
            // console.log(item);
            return <Apple positionX={newItem.x} positionY={newItem.y} />;
          });
        }
      })}
      <Snake positionX={0} positionY={0} onPositionChange={onPositionChange} />
      <Mongoose
        snakeY={snakeY}
        snakeX={snakeX}
        onMongoosePositionChange={onMongoosePositionChange}
      />
    </div>
  );
};

export default Playfield;
