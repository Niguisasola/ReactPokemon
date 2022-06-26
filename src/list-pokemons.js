import './App.css';
import PokemonsItem from './PokemonsItem';
import pokemons from './data';

function ListPokemons() {
    const PokeList = pokemons.map (item => {
        return (
            <PokemonsItem name= {item.name} type= {item.type} image ={item.sprite}/>
        )
    }
    )

    return (
        <main className="list-pokemons">
            {PokeList}
        </main>
    );
}

export default ListPokemons;