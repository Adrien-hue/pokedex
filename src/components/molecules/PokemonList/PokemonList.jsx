import { SearchBar } from "components/atoms";
import { PokemonCard } from "components/molecules";

import "./PokemonList.sass";

const PokemonList = ({data = [], handleChange}) => {


    return (<div className="pokemonList">
        <div className="pokemonCards">
            {data.map(
                (pokemon, index) => {
                    let id_pokemon = pokemon.url.split('/').slice(-2)[0];

                    return <PokemonCard key={`key_PokemonCard ${index}`} id={id_pokemon}>{pokemon.name}</PokemonCard>
                }
            )}
        </div>
        <SearchBar handleChange={handleChange}></SearchBar>
    </div>);
}

export default PokemonList;