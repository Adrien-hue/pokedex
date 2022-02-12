import { useContext } from "react";

import { Loader } from "components/atoms";

import { PokemonList } from "components/molecules";
import MainContext from "contexts/Main";

const Home = () => {
    const {value, isLoading, filteredData, handleChange} = useContext(MainContext);

    return (<div>
        {isLoading ? <Loader /> : <PokemonList data={filteredData} handleChange={handleChange}/> }
    </div>);
}

export default Home;
