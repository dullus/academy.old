import React, { useEffect, useState } from "react";
import Ground from "../Ground/Ground";
import Snake from "../Snake/Snake";
import Apple from "../Apple/Apple";

const Playfield: React.FC = () => {
  const [appleArray, setAppleArray] = useState<
    { eaten: boolean; x: number; y: number }[]
  >([]);

  const [snakeX, setSnakeX] = useState(0);
  const [snakeY, setSnakeY] = useState(0);

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

  useEffect(() => {
    fetch("https://run.mocky.io/v3/baa13358-faef-45ac-b1c0-cac81e274b3a").then(
      (response) => console.log(response.json())
    );
  }, []);

  let arr: number[] = [];
  function randomApples() {
    const randomN = Math.floor(Math.random() * numberOfGrounds.length);
    if (!arr.includes(randomN)) {
      arr.push(randomN);
    }
  }

  for (let i = 0; i < 20; i++) {
    randomApples();
  }

  useEffect(() => {
    const temp: React.SetStateAction<
      { eaten: boolean; x: number; y: number }[]
    > = [];
    numberOfGrounds.map((el) => {
      if (arr.includes(el.key)) {
        temp.push({ eaten: false, x: el.posX, y: el.posY });
      }
    });

    setAppleArray(temp);
  }, []);

  function onPositionChange(x: number, y: number) {
    setSnakeY(y);
    setSnakeX(x);
  }

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
      {appleArray.map((item) => {
        if (snakeY === item.y && snakeX === item.x) {
          let index = appleArray.indexOf(item);
          appleArray.splice(index, 1);
        } else {
          console.log(appleArray);
          return <Apple positionX={item.x} positionY={item.y} />;
        }
      })}
      <Snake positionX={0} positionY={0} onPositionChange={onPositionChange} />
    </div>
  );
};

export default Playfield;
