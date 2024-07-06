import React, { useState, useEffect } from "react";
import api from "../utils/api";
import TagContainer from "./TagContainer";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

// SearchFilter Component for displaying filter tags in TagContainer-component
// like all cuisines, all diettypes and all difficulties in SearchPage
const SearchFilter = ({ onCuisineSelect, onDietSelect , onDifficultySelect , onAllSelect}) => {

    const [cuisinetags, setCuisineTags] = useState([]);
    const [diettags, setDietTags] = useState([]);
    const [difficultytags, setDifficultytTags] = useState([]);

    // Extra tag for showing all recipes
    const tags = [
        {
            name: "Alles",
            icon: faUtensils,
            backgroundColor: "#FF8A00",
            onClick: () => onAllSelect(),
        }];

    // Fetching all meals to get needed tags like cuisine, diettype and difficulty
    useEffect(() => {
        async function fetchFilters() {
            try {
                const response = await api.get('/meal/all');
                const cuisineFilter = [...new Set(response.data.map(meal => meal.cuisine))];
                const dietFilter = [...new Set(response.data.map(meal => meal.diet))];
                const difficultyFilter = [...new Set(response.data.map(meal => meal.recipe.difficulty))];

                // Getting all cuisine tags
                const generatedCuisineTags = cuisineFilter.map(cuisine => ({
                    name: cuisine,
                    backgroundColor: '#B27777',
                    icon: null, // Add your icon logic here if needed
                    onClick: () => onCuisineSelect(cuisine),
                }));

                // Getting all diettype tags
                const generatedDietTags = dietFilter.map(diet => ({
                    name: diet,
                    backgroundColor: '#71226D',
                    icon: null, // Add your icon logic here if needed
                    onClick: () => onDietSelect(diet),
                }));

                // Getting all difficulty tags
                const generatedDifficultyTags = difficultyFilter.map(difficulty => ({
                    name: difficulty,
                    backgroundColor: '#6881DB',
                    icon: null, // Add your icon logic here if needed
                    onClick: () => onDifficultySelect(difficulty),
                }));

                setCuisineTags(generatedCuisineTags);
                setDietTags(generatedDietTags);
                setDifficultytTags(generatedDifficultyTags);


                console.log("Filters fetched: ", cuisineFilter);
            } catch (error) {
                console.error("Error fetching filters:", error);
            }
        }
        fetchFilters();
    }, []);

    return (
        <div className="filterSidebar">
            <h2 className="font-bold" >Filtern nach:</h2>
            <div className="filterOption">
                <TagContainer tags={tags}/>
            </div>
            <h2>Landesküche</h2>
            <div className="filterOption">
                <TagContainer tags={cuisinetags}/>
            </div>
            <h2>Ernährungsweise</h2>
            <div className="filterOption">
                <TagContainer tags={diettags}/>
            </div>
            <h2>Schwierigkeit</h2>
            <div className="filterOption">
                <TagContainer tags={difficultytags}/>
            </div>

        </div>
    );
}
export default SearchFilter;