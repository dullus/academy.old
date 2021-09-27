// import React, { useState } from 'react';
import styles from './App.module.css'
import Car from './Car';

const App: React.FC = () => {

  // const [locked, setLocked] = useState(false);

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
