import "./PokemonAttributes.sass";

const PokemonAttributes = ({label, value}) => {
    return(
        <div className="pokemonAttribute">
            <div>
                <p className="pokemonAttributes-label">{label}</p>
            </div>
            <div>
                <p className="pokemonAttributes-value">{value}</p>
            </div>
        </div>
    )
}

export default PokemonAttributes;