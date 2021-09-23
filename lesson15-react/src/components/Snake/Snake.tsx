import React, { useState, useEffect } from "react";
import styles from "./Snake.module.css";
interface Props {
  positionX: number;
  positionY: number;
  onPositionChange: (pox: number, poy: number) => void;
}

const Snake: React.FC<Props> = ({ onPositionChange }) => {
  const [posX, setPosX] = useState(Number);
  const [posY, setPosY] = useState(Number);
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
    onPositionChange(pox, poy);
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);

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
        border: "1px solid red",
        background: "red",
        fontSize: "15px",
        textAlign: "center",
      }}
    >
      Had
    </div>
  );
};

export default Snake;
