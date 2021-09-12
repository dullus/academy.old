import React from 'react';
import logo from './logo.svg';
import './App.css';
import Room from './Room';

const App: React.FC= () => {
  
  
  return (
    <div className="App">
      FLAT
      <Room/>
      <Room/>
      <Room/>
      <Room/>
    </div>
  );
}

export default App;
