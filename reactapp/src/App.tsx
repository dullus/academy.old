import React from 'react';
import './App.css';
import Room from './Room';
import Furniture from './Furniture';

const App: React.FC = () => {

  const color: string = ' red';

  const rooms = [
    {id: 1, name: 'one'},
    {id: 2, name: 'two'},
    {id: 3, name: 'three'},
    {id: 4, name: 'four'}
  ]

  const chairs = [
    {id: 1, nameChair: 'one'},
    {id: 2, nameChair: 'two'},
    {id: 3, nameChair: 'three'},
    {id: 4, nameChair: 'four'}
  ]

  return (
    <div className="App">
    Flat {color}
    {rooms.map((room =>  (
    <Room name={room.name}/>
    )))}

    {chairs.map((furniture => (
      <Furniture nameChair={furniture.nameChair}/>
    )))}
    
    </div>
    
  );
}

export default App;
