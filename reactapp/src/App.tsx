import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Room from './Room';

const App: React.FC = () => {

  const color: string = ' red';

  const rooms = [
    {id: 1, name: 'one'},
    {id: 2, name: 'two'},
    {id: 3, name: 'three'},
    {id: 4, name: 'four'}
  ]

  return (
    <div className="App">
    Flat {color}
    {rooms.map((room =>  (
    <Room name={room.name}/>
    )))}
    
    </div>
    
  );
}

export default App;
