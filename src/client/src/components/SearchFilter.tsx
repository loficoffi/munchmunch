import React from "react";


export default function  SearchFilter() {
    return (
        <div className="filter-sidebar">
            <h2>Filter</h2>
            <div className="filter-option">
                <input type="checkbox" id="option1" />
                <label htmlFor="option1">Option 1</label>
            </div>
            <div className="filter-option">
                <input type="checkbox" id="option2" />
                <label htmlFor="option2">Option 2</label>
            </div>
            <div className="filter-option">
                <input type="checkbox" id="option3" />
                <label htmlFor="option3">Option 3</label>
            </div>
            {/* Weitere Filteroptionen hinzufügen */}
        </div>
    );
}