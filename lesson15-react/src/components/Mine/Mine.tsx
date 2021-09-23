import React from "react";

interface Props {
  positionX: number;
  positionY: number;
}

const Mine: React.FC<Props> = ({ positionX, positionY }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: positionX,
        top: positionY,
        width: 75,
        height: 75,
        background: "red",
      }}
    ></div>
  );
};

export default Mine;
