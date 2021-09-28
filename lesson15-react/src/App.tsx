import React, { createContext, useEffect, useState } from "react";
import Playfield from "./components/Playfield/Playfield";
import HighScoreTable from "./components/HighscoreTable/HighScoreTable";
import ChoosePlayer from "./components/ChoosePlayer/ChoosePlayer";

interface IState {
  id?: number;
  name?: string;
  score?: number;
  appleArr?: { eaten: boolean; x: number; y: number }[];
  snakePos?: { x: number; y: number };
  mongoosePos?: { x: number; y: number };
}

export const MyContext = createContext<IState[]>([]);

const App: React.FC = () => {
  const [data, setData] = useState<IState[]>([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/bf595615-98e0-4c43-a88a-6070f2d46793").then(
      (resp) =>
        resp.json().then((resp) => {
          resp.push(
            { id: 9, appleArr: [] },
            { id: 10, snakePos: { x: 0, y: 0 } },
            { id: 11, mongoosePos: { x: 0, y: 0 } }
          );
          setData(resp);
        })
    );
  }, []);

  return (
    <MyContext.Provider value={data}>
      <div>
        <Playfield />
        <HighScoreTable />
        {/* <ChoosePlayer /> */}
      </div>
    </MyContext.Provider>
  );
};

export default App;
