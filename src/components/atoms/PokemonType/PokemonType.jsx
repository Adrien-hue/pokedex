import { Link } from "react-router-dom";

import "./PokemonType.sass";

const PokemonType = ({name}) => {
    return (<Link to={`/type/${name}`} className={`pokemonType ${name}`}>
        {name}
    </Link>);
}

export default PokemonType;