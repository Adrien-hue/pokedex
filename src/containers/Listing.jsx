import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import MainContext from "contexts/Main";

import { Loader } from "components/atoms";
import { PokemonList } from "components/molecules";

const Home = () => {
    const searchParams = useSearchParams();
    const {value, isLoading, filteredData, handleChange} = useContext(MainContext);
    
    useEffect(() => {
        searchParams[1](value.length === 0 ? "" : { filter: value });
    }, []);

    return (<div>
        {isLoading ? <Loader /> : <PokemonList data={filteredData} value={value} handleChange={handleChange}/> }
    </div>);
}

export default Home;
