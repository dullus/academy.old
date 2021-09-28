import React, { useContext, useEffect, useState } from "react";
import Ground from "../Ground/Ground";
import Snake from "../Snake/Snake";
import Apple from "../Apple/Apple";
import Mongoose from "../Mongoose/Mongoose";
import { MyContext } from "../../App";

const Playfield: React.FC = () => {
  const [appleArray, setAppleArray] = useState<
    { id: number; eaten: boolean; x: number; y: number }[]
  >([]);
  const [snakeX, setSnakeX] = useState(0);
  const [snakeY, setSnakeY] = useState(0);
  const updatedContex = useContext(MyContext);
  let numberOfGrounds: {
    key: number;
    posX: number;
    posY: number;
  }[] = [];

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
  id = 0;
  let temp: { id: number; eaten: boolean; x: number; y: number }[] = [];
  numberOfGrounds.forEach((el) => {
    if (arr.includes(el.key)) {
      temp.push({ id: id, eaten: false, x: el.posX, y: el.posY });
      id++;
    }
  });
  useEffect(() => {
    setAppleArray(temp);
  }, []);

  function changeContext(data: any[]) {
    data.find((item) => {
      if (item.id === 9) {
        const tempArr = [...appleArray];
        item.appleArr = tempArr;
        tempArr.map((newItem: { eaten: boolean; x: number; y: number }) => {
          if (!newItem.eaten) {
            return <Apple positionX={newItem.x} positionY={newItem.y} />;
          }
        });
      }
    });
  }

  function onMongoosePositionChange(x: number, y: number) {
    // console.log(x, y);
  }

  function onPositionChange(x: number, y: number) {
    setSnakeY(y);
    setSnakeX(x);
  }

  return (
    <MyContext.Consumer>
      {(data) => (
        <div
          style={{
            position: "absolute",
            width: 750,
            height: 750,
            background: "gray",
          }}
        >
          {data.find((item) => {
            if (item.id === 9) {
              item.appleArr = appleArray;
            }
          })}
          {numberOfGrounds.map((item) => {
            return (
              <Ground
                index={item.key}
                positionX={item.posX}
                positionY={item.posY}
              />
            );
          })}
          {appleArray.map((item) => {
            if (!item.eaten) {
              return <Apple positionX={item.x} positionY={item.y} />;
            }
          })}

          {changeContext(data)}
          <Snake
            positionX={0}
            positionY={0}
            onPositionChange={onPositionChange}
          />
          <Mongoose
            snakeY={snakeY}
            snakeX={snakeX}
            onMongoosePositionChange={onMongoosePositionChange}
          />
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Playfield;
