import { Link } from "react-router-dom";

import "./PokemonCard.sass";

const PokemonCard = ({children, id, ...props}) => {
    const image_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    
    return (<Link to={`/pokemon/${children}`} className="pokemonCard">
        <img src={image_url} alt={children} />
        <h3>{children}</h3>
    </Link>);
}

export default PokemonCard;