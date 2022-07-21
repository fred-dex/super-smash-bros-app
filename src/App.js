import './App.css';
import { useState } from 'react';
import Fighters from './components/Fighters'
import FighterScreen from './components/FighterScreen'

function App() {
  const fighters = [
    {name: 'Roy', color: 'blue'},
    {name: 'Ganondorf', color: 'gray'},
    {name: 'Mario', color: 'green'},
    {name: 'Luigi', color: 'white'},
    {name: 'Marth', color: 'purple'},
    {name: 'Link', color: 'chartreuse'},
    {name: 'Inkling', color: 'white'},
    {name: 'Samus', color: 'green'},
    {name: 'Fox', color: 'green'},
    {name: 'Sheik', color: 'green'},
    {name: 'Zelda', color: 'green'},
    {name: 'Ken', color: 'red'},
    {name: 'Lucina', color: 'aquamarine'}
  ]

  const [selectedFighter, setSelectedFighter] = useState()

  return (
    <div className='App'>
      <h1>Fighters</h1>
      <div className='fighters-grid'>
        {
          fighters.map((fighters, index) => {
            return (
            <Fighters fighters={fighters} setSelectedFighter={setSelectedFighter}/>
            )
          })
        }
      </div>
      {
        selectedFighter ? 
      <FighterScreen />
      : null
      }
    </div>
  );
}

export default App;
