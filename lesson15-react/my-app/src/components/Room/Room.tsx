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
    setButtonState((buttonState = !buttonState));

    // if (buttonState) {
    //   setButtonState(false);
    // } else setButtonState(true);
  };

  const [size_info, setSize] = useState(1);
  const [weight_info, setWeight] = useState(1);
  const [cost_info, setCost] = useState(1);
  const [sport_info, setSport] = useState("txt");

  const setParams = (
    size: number,
    weigth: number,
    cost: number,
    sport: string
  ) => {
    setSize(size);
    setWeight(weigth);
    setCost(cost);
    setSport(sport);
  };

  useEffect(() => {
    fetch("https://run.mocky.io/v3/3a6a7cdc-4c27-425a-a478-4289201e7700")
      .then((response) => response.json())
      .then((response) => {
        // console.log(response[id_info - 1]);
        setParams(
          response[id - 1].size,
          response[id - 1].weight,
          response[id - 1].cost,
          response[id - 1].sport
        );
      });

    // dispatch({ type: "FETCH_SUCCESS", payload: response.json });

    // returned function will be called on component unmount
  });

  const ball = { name: "ball", color: "white", hasLight: true };

  return (
    <div className={`${styles.room} ${styles[color]}`}>
      <p> {`Item  ${name}`}</p>

      {/* {data.temperature !== 0 && <div>Temperature: {data.temperature}</div>} */}

      {id === 1 && <p>Soccer ball</p>}
      {id === 2 && <p>Golf ball</p>}
      {id === 3 && <p>Basketball</p>}
      <Ball id={id} name={ball.name} color={ball.color} />
      <button
        id={`ball${id}`}
        className={styles.balls}
        onClick={() => changeButtonState(buttonState)}
      >
        More info
      </button>

      {buttonState && (
        <Ball_Info
          id_info={id}
          size={size_info}
          weight={weight_info}
          cost={cost_info}
          sport={sport_info}
        />
      )}
    </div>
  );
};

export default Room;
