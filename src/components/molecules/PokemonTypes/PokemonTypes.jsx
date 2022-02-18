import { PokemonType } from "components/atoms";

import "./PokemonTypes.sass";
 
const PokemonTypes = ({pokemonTypes}) => {
    return (<div className="pokemonTypes">
        {pokemonTypes.map((value, index) => {return <PokemonType key={`PokemonType_${index}`} name={value.name} />})}
    </div>)
}

export default PokemonTypes;