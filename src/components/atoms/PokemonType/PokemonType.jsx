import "./PokemonType.sass";

const PokemonType = ({name}) => {
    return (<p className={`pokemonType ${name}`}>
        {name}
    </p>);
}

export default PokemonType;