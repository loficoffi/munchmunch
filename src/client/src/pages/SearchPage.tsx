import React, { useState, useEffect } from 'react';
import Searchbar from "../components/Searchbar.tsx";
import SearchFilter from "../components/SearchFilter.tsx";
import MealTile from '../components/MealTile.tsx';
import api from "../utils/api.ts";
import { Meal } from "../models/datamodels/Meal.ts";



const SearchPage: React.FC = () => {
    const [allMeals, setAllMeals] = useState<Meal[]>([]);
    const [activeMealArray, setActiveMealArray] = useState<Meal[]>([]);
    const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);
    const [selectedDiet, setSelectedDiet] = useState<string | null>(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

    useEffect(() => {
        async function fetchMeals() {
            try {
                const response = await api.get('/meal/all');
                const meals = response.data;
                setAllMeals(meals);
                setActiveMealArray(meals);
                setSelectedCuisine(null);
            } catch (error) {
                console.error("Error fetching all meals:", error);
            }
        }
        console.log("Aktive: " + activeMealArray);

        // Load all meals initially
        fetchMeals();
    }, []);

    useEffect(() => {
        if (selectedCuisine === null) {
            // Wenn keine Cuisine ausgewählt ist, zeige alle Mahlzeiten an
            setActiveMealArray(allMeals);
        } else {
            // Filtere Mahlzeiten nach der ausgewählten Küche
            const filteredMeals = allMeals.filter(meal => meal.cuisine === selectedCuisine);
            setActiveMealArray(filteredMeals);
        }
    }, [selectedCuisine, allMeals]);

    useEffect(() => {
        if (selectedDiet === null) {
            // Wenn keine Cuisine ausgewählt ist, zeige alle Mahlzeiten an
            setActiveMealArray(allMeals);
        } else {
            // Filtere Mahlzeiten nach der ausgewählten Küche
            const filteredMeals = allMeals.filter(meal => meal.diet === selectedDiet);
            setActiveMealArray(filteredMeals);
        }
    }, [selectedDiet, allMeals]);


    useEffect(() => {
        if (selectedDifficulty === null) {
            // Wenn keine Cuisine ausgewählt ist, zeige alle Mahlzeiten an
            setActiveMealArray(allMeals);
        } else {
            // Filtere Mahlzeiten nach der ausgewählten Küche
            const filteredMeals = allMeals.filter(meal => meal.recipe.difficulty === selectedDifficulty);
            setActiveMealArray(filteredMeals);
        }
    }, [selectedDifficulty, allMeals]);



    const handleCuisineSelect = (cuisine : string) => {

        setSelectedCuisine(cuisine);
        console.log(cuisine + " Ist Gecklicked");
    };

    const handleDietSelect = (diet : string) => {

        setSelectedDiet(diet);
        console.log(diet + " Ist Gecklicked");
    };
    const handleDifficultySelect = (difficulty : string) => {

        setSelectedDifficulty(difficulty);
        console.log(difficulty + " Ist Gecklicked");
    };
    const handleAllSelect = () => {

        setActiveMealArray(allMeals);

        console.log("Alle Ist Gecklicked");
    };


    return (
        <div className="search-page">
             <div className="sidebar-container"> <SearchFilter onCuisineSelect={handleCuisineSelect} onDietSelect={handleDietSelect} onDifficultySelect={handleDifficultySelect} onAllSelect={handleAllSelect} /></div>
            <div className="main-content">
                <Searchbar />
                <div className="meal-grid">
                    {activeMealArray.map(meal => (
                        <MealTile key={meal.id} meal={meal} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
