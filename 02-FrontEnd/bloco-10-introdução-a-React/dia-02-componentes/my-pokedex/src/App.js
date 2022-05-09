import './App.css';
import pokemons from './Data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App-header">
      <h1>Pokedex Khrystian</h1>
      <div className='organiza'>
        {pokemons.map(poke => <Pokedex key={ poke.id} user={poke} />)}
      </div>
      
      

    </div>
  );
}

export default App;
