import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Loader } from "components/atoms";
import { PokemonDetails } from "components/organisms";

const Pokemon = () => {

    const pokemon_name = useParams().name;

    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);

    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonSpecs, setPokemonSpecs] = useState([]);
    
    const [isFav, setIsFav] = useState(false)

    const handleClick = (id, name) => {

        if(localStorage.getItem(id) != null){
            localStorage.removeItem(id);
            setIsFav(false);
        } else {
            localStorage.setItem(id, JSON.stringify({name: name, url: `https://pokeapi.co/api/v2/pokemon/${id}/`}));
            setIsFav(true);
        }
    }

    useEffect(() => {
        // localStorage.clear()
        const fetchApi = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`);
                const dataAPI = await response.json();
                
                setPokemonData(dataAPI);
                setPokemonSpecs([
                    {
                        name: "height",
                        value: dataAPI.height
                    },    
                    {
                        name: "weight",
                        value: dataAPI.weight
                    },    
                    {
                        name: "hp",
                        value: dataAPI.stats[0].base_stat
                    },    
                    {
                        name: "attack",
                        value: dataAPI.stats[1].base_stat
                    },    
                    {
                        name: "defense",
                        value: dataAPI.stats[2].base_stat
                    },    
                    {
                        name: "speed",
                        value: dataAPI.stats[5].base_stat
                    },      
                ]);
                
                if(localStorage.getItem(dataAPI.id) != null){
                    setIsFav(true)
                }

                setLoading(false);
            } catch (err) {
                setError(true);
                throw err;
            }
        };

        fetchApi();
    }, [isFav]);

    return ( <div>
        {isLoading ? <Loader /> : <PokemonDetails id={pokemonData.id} name={pokemonData.name} pokemonSpecs={pokemonSpecs} pokemonAbilities={pokemonData.abilities} pokemonTypes={pokemonData.types} isFav={isFav} handleClick={handleClick}/> }
    </div>);
}

export default Pokemon;