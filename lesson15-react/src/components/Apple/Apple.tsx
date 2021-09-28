import React, { useState } from "react";
import { MyContext } from "../../App";
interface Props {
  positionX: number;
  positionY: number;
}

const Apple: React.FC<Props> = ({ positionX, positionY }) => {
  return (
    <MyContext.Consumer>
      {(data) => (
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
      )}
    </MyContext.Consumer>
  );
};

export default Apple;
