// import React, { useState } from 'react';
import './App.css';
import Car from './Car';

const App: React.FC = () => {

  // const [locked, setLocked] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>
         <strong> Car Security System </strong>
        </p>
        <Car/>
        </header>
    </div>
  );
}
export default App;
