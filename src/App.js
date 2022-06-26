import './App.css';
import Header from './header';
import Search from './search';
import ListPokemons from './list-pokemons';

function App() {
  return (
    <div className="container">
      <Header/>
      <Search/>
      <ListPokemons/>
    </div>
  );
}

export default App;
