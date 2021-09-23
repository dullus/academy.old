import React, { useState } from "react";
import Mine from "../Mine/Mine";
import styles from "./Ground.module.css";
interface Props {
  positionX: number;
  positionY: number;
}

const Apple: React.FC<Props> = ({ positionX, positionY }) => {
  const [eaten, setEaten] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        left: positionX,
        top: positionY,
        width: 30,
        height: 30,
        background: "green",
        border: "1px solid green",
        borderRadius: "50px",
        fontSize: "10px",
        textAlign: "center",
      }}
    >
      Jablko
    </div>
  );
};

export default Apple;
