import React, {Fragment, useState} from 'react';
import Searchbar from "../components/Searchbar.tsx";
import SearchFilter from "../components/SearchFilter.tsx";




export default function SearchPage () {


    return(

        <div className="searchPage">
            <div className="sidebar-container"><SearchFilter/></div>
            <div className="main-content"><Searchbar/></div>
        </div>

    );
}
