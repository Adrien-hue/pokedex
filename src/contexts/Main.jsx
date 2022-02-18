import { createContext, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import { useEffect } from "react";

const MainContext = createContext(false);

const Provider = ({ children }) => {
    const [searchParams, setSearchParams] = useSearchParams(); //GET
    const [value, setValue] = useState(searchParams.get("filter") || ""); //Barre de recherche


    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState(data); // Array(getter, setter)

    const [currentUrl, setCurrentUrl] = useState();
    const currentLocation = useLocation();

    // Constuction
    useEffect(() => {
        const fetchApi = async () => {
            try {
                let url;
                if(currentLocation.pathname == "/type"){
                    url = "https://pokeapi.co/api/v2/type";
                } else if(currentLocation.pathname.indexOf("/type/") >= 0){
                    const searchType = currentLocation.pathname.split('/').slice(-1)[0];
                    url = `https://pokeapi.co/api/v2/type/${searchType}`;
                } else {
                    url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=400";
                }

                const response = await fetch(
                    url
                );
                const dataAPI = await response.json();
                console.log(dataAPI);
                if(currentLocation.pathname.indexOf("/type/") >= 0){
                    let data = [];
                    dataAPI.pokemon.map((v, i) => {
                        data.push(v.pokemon)
                    });

                    setData(data);
                    
                    setFilteredData(
                        data.filter((pokemon) => 
                            pokemon.name.toLowerCase().includes(value.toLowerCase())
                        )
                    );
                } else {
                    setData(dataAPI.results);

                    setFilteredData(
                        dataAPI.results.filter((pokemon) =>
                            pokemon.name.toLowerCase().includes(value.toLowerCase())
                        )
                    );
                }
                
                setLoading(false);
            } catch (err) {
                setError(true);
                throw err;
            }
        };

        fetchApi();
    }, [currentLocation]);

    // Barre de recherche
    useEffect(() => {
        setFilteredData(
            data.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(value.toLowerCase())
            )
        );
    }, [value]);

    const handleChange = ({ target: { value } }) => {
        setValue(value);
        setSearchParams(value.length === 0 ? "" : { filter: value });
    };

  return (
    <MainContext.Provider value={{ value, isLoading, filteredData, handleChange }}>
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;