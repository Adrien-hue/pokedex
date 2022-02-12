import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useEffect } from "react";

const MainContext = createContext(false);

const Provider = ({ children }) => {
    const [searchParams, setSearchParams] = useSearchParams(); //GET
    const [value, setValue] = useState(searchParams.get("filter") || ""); //Barre de recherche


    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState(data); // Array(getter, setter)

    const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=400");
    const [previousUrl, setPreviousUrl] = useState("");
    const [nextUrl, setNextUrl] = useState("");

    // Constuction
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch(
                    currentUrl
                );
                const dataAPI = await response.json();
                
                setData(dataAPI.results);
                setFilteredData(dataAPI.results);
                setPreviousUrl(dataAPI.previous);
                setNextUrl(dataAPI.next);
                
                setLoading(false);
            } catch (err) {
                setError(true);
                throw err;
            }
        };

        fetchApi();
    }, []);

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