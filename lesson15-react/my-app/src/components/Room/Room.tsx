import styles from "./Room.module.css";
import { useState, useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Ball from "./../Ball/Ball";
import { escapeLeadingUnderscores } from "typescript";
import Ball_Info from "../Ball_Info";

interface Props {
  id: number;
  name: string;
  color: string;
}

const Room: React.FC<Props> = ({ id, name, color }) => {
  const [temperature, setTemperature] = useState(22);

  const [buttonState, setButtonState] = useState(false);

  const { data, setData } = useContext(MyContext);

  const onRoomTemperatureChange = (temperature: number) => {
    setTemperature(temperature);
  };

  const changeButtonState = (buttonState: boolean) => {
    if (buttonState) {
      setButtonState(false);
    } else setButtonState(true);
  };

  useEffect(() => {
    console.log("MOUNTED ROOM");
    {
      console.log(buttonState);
    }
  });

  const ball = { name: "ball", color: "white", hasLight: true };

  return (
    <div className={`${styles.room} ${styles[color]}`}>
      <p> {`Item  ${name}`}</p>

      {/* {data.temperature !== 0 && <div>Temperature: {data.temperature}</div>} */}

      {id == 1 && <p>Soccer ball</p>}
      {id == 2 && <p>Golf ball</p>}
      {id == 3 && <p>Basketball</p>}
      <Ball id={id} name={ball.name} color={ball.color} />
      <button
        id={`ball${id}`}
        className={styles.balls}
        onClick={() => changeButtonState(buttonState)}
      >
        More info
      </button>

      {buttonState && (
        <Ball_Info id_info={id} size={1} weight={1} cost={1} sport={"1"} />
      )}
    </div>
  );
};

export default Room;
