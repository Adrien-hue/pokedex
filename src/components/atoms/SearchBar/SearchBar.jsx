import "./SearchBar.sass";

const SearchBar = ({handleChange}) => {
    return <form className="searchForm">
        <input type="text" name="searchBar" className="searchInput" placeholder="Rechercher" onChange={handleChange}/>
    </form>
}

export default SearchBar;