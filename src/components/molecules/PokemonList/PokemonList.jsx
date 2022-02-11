import { PokemonCard } from "components/molecules";

import "./PokemonList.sass";

const PokemonList = ({data = []}) => {


    return (<div className="pokemonList">
        {data.map(
            (pokemon, index) => {
                let id_pokemon = pokemon.url.split('/').slice(-2)[0];

                return <PokemonCard key={`key_PokemonCard ${index}`} id={id_pokemon}>{pokemon.name}</PokemonCard>
            }
        )}
    </div>);
}

export default PokemonList;