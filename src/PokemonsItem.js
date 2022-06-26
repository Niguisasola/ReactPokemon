import './App.css'

function PokemonsItem ({name, type, image}) {
    return (
        <article className="list-pokemons-item">
          <div className="list-pokemons-item-content">
            <img
              src={image}
              alt="pokemon-1"
            ></img>
            <h3>
              {name}
              <span>{type}</span>
            </h3>
          </div>
        </article>
    );
}

export default PokemonsItem;