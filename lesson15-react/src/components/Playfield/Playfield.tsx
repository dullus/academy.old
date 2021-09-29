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

  useEffect(() => {
    const interval = setInterval(() => {
      changeContext(updatedContex);
    }, 200);
    return () => {
      clearInterval(interval);
    };
  });

  function changeContext(data: any[]) {
    data.find((item) => {
      if (item.id === 9) {
        setAppleArray(item.appleArr);
      }
    });
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
          {}
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

          <Snake />
          <Mongoose />
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Playfield;
