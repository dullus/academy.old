import React, { useState } from "react";

interface Props {
  positionX: number;
  positionY: number;
  index: number;
}

const Ground: React.FC<Props> = ({ index, positionX, positionY }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: positionX,
        top: positionY,
        width: 30,
        height: 30,
        border: "1px solid cyan",
      }}
    ></div>
  );
};

export default Ground;
