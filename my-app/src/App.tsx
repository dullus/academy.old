import React from 'react';

import './App.css';
import Room from './Izba'

const App: React.FC = () => {
  const color = "yellow";

  const rooms = [
    {id: 1, name: "jedna"},
    {id: 2, name: "dva"},
    {id: 3, name: "tri"},
    {id: 4, name: "styri"},
  ] 


  return (
    <div className="App">
    Flat {color}
    {rooms.map((room =>  (
    <Room name={room.name} id={room.id}/>
    )))}
    
    </div>
    
  );
}

export default App;
