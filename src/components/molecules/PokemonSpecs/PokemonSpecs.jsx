import { PokemonAttributes } from "components/atoms";

import "./PokemonSpecs.sass";

const PokemonSpecs = ({pokemonSpecs}) => {
    
    return (<div className="pokemonSpecs">
        {pokemonSpecs.map((value, index, self) => { return <PokemonAttributes key={`pokemonAttribute${index}`} label={value.name} value={value.value} />;})}
    </div>);
}

export default PokemonSpecs;