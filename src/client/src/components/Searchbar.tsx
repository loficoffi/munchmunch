import React from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Searchbar component to search recipes based on recipe name entered by the user
const Searchbar= ({onSearchBarSelect }) => {
    const handleChange = (event) => {
        const searchTerm = event.target.value;
        // The function will receive the value entered by the user
        onSearchBarSelect(searchTerm);
    };


    return (
        <div className="searchBar mb-5 min-w-32 md:max-w-72 lg:max-w-72  ">
            <FontAwesomeIcon className="searchIcon" icon={faSearch}/>
            <input onChange={handleChange} type="text" className="searchInput" placeholder="Search..."/>
        </div>
    );
}
export default Searchbar;