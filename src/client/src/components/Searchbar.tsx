import React from "react";
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Searchbar= ({onSearchBarSelect }) => {
    const handleChange = (event) => {
        const searchTerm = event.target.value;
        onSearchBarSelect(searchTerm); // Übergebe den eingegebenen Suchbegriff an die übergeordnete Funktion
    };


    return (
        <div className="searchBar mb-5">
            <FontAwesomeIcon className="searchIcon" icon={faSearch}/>
            <input onChange={handleChange} type="text" className="searchInput" placeholder="Search..."/>
        </div>
    );
}
export default Searchbar;