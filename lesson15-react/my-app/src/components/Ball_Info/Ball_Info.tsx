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
  return (
    <>
      <div className={styles.ball_Info}>
        <div className={styles.textWrapper}>
          <p>Size: </p> <p>{size}'</p>
        </div>
        <div className={styles.textWrapper}>
          <p>Weight: </p> <p>{weight} g</p>
        </div>
        <div className={styles.textWrapper}>
          <p>Cost: </p>
          <p>{cost} $</p>
        </div>
        <div className={styles.textWrapper}>
          <p>Sport: </p>
          <p>{sport}</p>
        </div>
      </div>
    </>
  );
};

export default Ball_Info;
