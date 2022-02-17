import { PokemonAbility, PokemonType } from "components/atoms";
import { PokemonSpecs } from "components/molecules";

import "./PokemonDetails.sass";

const PokemonDetails = ({id, name, pokemonSpecs, pokemonAbilities, pokemonTypes}) => {
    const image_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (<div className="pokemonDetails">
        <h2>{name}</h2>

        <div className="specs">
            <div>
                <img src={image_url} alt="" width="200" height="200"/>

                <div className="types">
                    {pokemonTypes.map((value, index) => {return <PokemonType key={`PokemonType_s${index}`} name={value.type.name}/>})}
                </div>
            </div>

            <PokemonSpecs pokemonSpecs={pokemonSpecs}/>
        </div>

        <h2>Abilities</h2>

        <div className="abilities">
            {pokemonAbilities.map((value, index) => {return <PokemonAbility key={`PokemonAbility_${index}`} name={value.ability.name} />})}
        </div>
    </div>)
}

export default PokemonDetails;