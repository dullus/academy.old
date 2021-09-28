import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../App";
import styles from "./ChoosePlayer.module.css";
const ChoosePlayer: React.FC = () => {
  const [chosenPlayer, setChosenPlayer] = useState(0);
  const [firstName, setFirstName] = useState("");
  console.log(firstName);

  return (
    <MyContext.Consumer>
      {(data) => (
        <form>
          <input
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <select>
            <option selected value="vyberte hraca">
              vyberte hraca
            </option>
            <option value="Stano">Stano</option>
            <option value="Sebo">Sebo</option>
            <option value="Stevo">Stano</option>
            <option value="Pali">Pali</option>
            <option value="Dano">Dano</option>
            <option value="Tina">Tina</option>
            <option value="Kiko">Kiko</option>
            <option value="Erik">Erik</option>
          </select>
        </form>
      )}
    </MyContext.Consumer>
  );
};

export default ChoosePlayer;
