import React, { createContext } from "react";
import Playfield from "./components/Playfield/Playfield";

interface IState {
  data: boolean;
  setData: (e: boolean) => void;
}

export const MyContext = createContext({} as IState);

const App: React.FC = () => {
  const isFull = true;

  return (
    <div>
      <Playfield />
    </div>
  );
};

export default App;
