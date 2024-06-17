import React from "react";
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function  Searchbar() {
    return (
        <div className="searchBar">
            <FontAwesomeIcon className="searchIcon" icon={faSearch}/>
            <input type="text" className="searchInput" placeholder="Search..."/>
        </div>
    );
}
