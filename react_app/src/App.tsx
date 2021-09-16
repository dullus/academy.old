import React from 'react';
import './App.css';
import Flat from './components/Flat/Flat'


const App: React.FC = () => {
const flat = {owner: 'Kristina', id: 1}


return (
<div className="App">
<Flat owner={flat.owner}/>
 </div>
 
 );
}
export default App;