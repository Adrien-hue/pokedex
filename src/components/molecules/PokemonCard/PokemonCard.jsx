import "./PokemonCard.sass";

const PokemonCard = ({children, id, ...props}) => {
    const image_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    
    return (<div className="pokemonCard">
        <img src={image_url} alt={children} />
        <h3>{children}</h3>
    </div>);
}

export default PokemonCard;