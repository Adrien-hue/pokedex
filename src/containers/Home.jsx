import { useState, useEffect } from "react";

import { Loader } from "components/atoms";

import { PokemonList } from "components/molecules";

const Home = () => {
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    
    const [data, setData] = useState([]);
    const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=32");
    const [previousUrl, setPreviousUrl] = useState("");
    const [nextUrl, setNextUrl] = useState("");

    const fetchApi = async () => {
        try {
            const response = await fetch(
                currentUrl
            );
            const data = await response.json();
            
            setData(data.results);
            setPreviousUrl(data.previous);
            setNextUrl(data.next);
            
            setLoading(false);
        } catch (err) {
            setError(true);
            throw err;
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (<div>
        {isLoading ? <Loader /> : <PokemonList data={data} /> }
    </div>);
}

export default Home;