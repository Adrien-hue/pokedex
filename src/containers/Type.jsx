import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import MainContext from "contexts/Main";

import { Loader } from "components/atoms";
import { PokemonTypes } from "components/molecules";

const Type = () => {
    const searchParams = useSearchParams();
    const {value, isLoading, filteredData, handleChange} = useContext(MainContext);

    return (<div>
        {isLoading ? <Loader /> : <PokemonTypes pokemonTypes={filteredData}/> }
    </div>)
    ;
}

export default Type;