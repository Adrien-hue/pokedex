import "./SearchBar.sass";

const SearchBar = ({value = "", handleChange}) => {
    return <form className="searchForm">
        <input type="text" name="searchBar" value={value} className="searchInput" placeholder="Rechercher" onChange={handleChange}/>
    </form>
}

export default SearchBar;