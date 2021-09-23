import React from 'react';
import './App.css';
import Car from './Car';

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Car Security System
        </p>
        <Car/>
        </header>
    </div>
  );

}
export default App;
