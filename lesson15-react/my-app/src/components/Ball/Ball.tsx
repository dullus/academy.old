import styles from "./Ball.module.css";
import { useState, useContext, useEffect } from "react";
import { MyContext } from "../../App";

interface Props {
  id?: number;
  name: string;
  color: string;
}

const Ball: React.FC<Props> = ({ id, name, color }) => {
  const [temperature, setTemperature] = useState(20);

  const { data, setData } = useContext(MyContext);

  useEffect(() => {
    console.log("wasd");
  });

  return (
    <>
      {/* <div>{`I am the classic ${name}`}</div> */}
      {id === 1 && (
        <div
          className={`${styles.ball} ${styles[color]}`}
          style={{
            backgroundImage: `url(https://www.hrackyshop.sk/upload_files/products/cierno-biela-futbalova-lopta-23-cm.jpg)`,
          }}
        >
          {/* {data.temperature !== 0 && <div>Temperature: {temperature}</div>} */}

          {/* <button onClick={() => setTemperature(temperature + 1)}>
            increase from chair
          </button> */}
        </div>
      )}

      {id === 2 && (
        <div
          className={`${styles.ball} ${styles[color]}`}
          style={{
            backgroundImage: `url(https://media.istockphoto.com/photos/golf-ball-3d-rendering-picture-id1197536633)`,
          }}
        ></div>
      )}
      {id === 3 && (
        <div
          className={`${styles.ball} ${styles[color]}`}
          style={{
            backgroundImage: `url(https://img.joomcdn.net/63fa5dd29a58e2a5b261c258a923a6fd79f7d8c8_original.jpeg)`,
          }}
        ></div>
      )}
    </>
  );
};

export default Ball;
