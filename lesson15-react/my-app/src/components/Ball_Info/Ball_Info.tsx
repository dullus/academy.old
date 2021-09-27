import { useState, useContext, useEffect } from "react";
import styles from "./Ball_info.module.css";
interface Props {
  id_info: number;
  size: number;
  weight: number;
  cost: number;
  sport: string;
}

const Ball_Info: React.FC<Props> = ({ id_info, size, weight, cost, sport }) => {
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
          response[id_info - 1].size,
          response[id_info - 1].weight,
          response[id_info - 1].cost,
          response[id_info - 1].sport
        );
      });

    // dispatch({ type: "FETCH_SUCCESS", payload: response.json });

    // returned function will be called on component unmount
  });

  return (
    <>
      <div className={styles.ball_Info}>
        <div className={styles.textWrapper}>
          <p>Size: </p> <p>{size_info}'</p>
        </div>
        <div className={styles.textWrapper}>
          <p>Weight: </p> <p>{weight_info} g</p>
        </div>
        <div className={styles.textWrapper}>
          <p>Cost: </p>
          <p>{cost_info} $</p>
        </div>
        <div className={styles.textWrapper}>
          <p>Sport: </p>
          <p>{sport_info}</p>
        </div>
      </div>
    </>
  );
};

export default Ball_Info;
