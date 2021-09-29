// import React, { useState } from 'react';
import styles from './App.module.css'
import Car from './Components/Car';

const App: React.FC = () => {

  return (
    <div className={styles.App}>
      <header className={styles.appPage}>
        <p>
         <strong> Car Security System </strong>
        </p>
        <Car/>
        </header>
    </div>
  );
}
export default App;
