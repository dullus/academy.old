import React from 'react';
import './App.css';
import Flat from './Flat'
import Room from './Room';
import Sofa from './Sofa'
import styles from "./App.module.css"


const App: React.FC = () => {
const flat = {owner: 'Kristina'}


return (
<div className="App">
<Flat owner={flat.owner}/>
 </div>
 
 );
}
export default App;