import React, { useState, useEffect } from 'react';
import Searchbar from "../components/Searchbar.tsx";
import SearchFilter from "../components/SearchFilter.tsx";
import MealTile from '../components/MealTile.tsx';
import api from "../utils/api.ts";
import { Meal } from "../models/datamodels/Meal.ts";

interface SelectedFilters {
    cuisines: string[];
    diets: string[];
    difficulties: string[];
}

const SearchPage: React.FC = () => {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [filters, setFilters] = useState<SelectedFilters>({ cuisines: [], diets: [], difficulties: [] });

    useEffect(() => {
        async function fetchMeals() {
            try {
                const response = await api.get('/meal/all');
                setMeals(response.data);
            } catch (error) {
                console.error("Error fetching meals:", error);
            }
        }

        fetchMeals();
    }, []);

    useEffect(() => {
        async function fetchFilteredMeals() {
            try {
                const response = await api.get('/meal/filtered', {
                    params: {
                        cuisines: filters.cuisines.join(','),
                        diets: filters.diets.join(','),
                        difficulties: filters.difficulties.join(',')
                    }
                });
                setMeals(response.data);
            } catch (error) {
                console.error("Error fetching filtered meals:", error);
            }
        }

        if (filters.cuisines.length > 0 || filters.diets.length > 0 || filters.difficulties.length > 0) {
            fetchFilteredMeals();
        } else {
            async function fetchMeals() {
                try {
                    const response = await api.get('/meal/all');
                    setMeals(response.data);
                } catch (error) {
                    console.error("Error fetching meals:", error);
                }
            }

            fetchMeals();
        }
    }, [filters]);

    const handleFilterChange = (newFilters: SelectedFilters) => {
        setFilters(newFilters);
    };

    return (
        <div className="searchPage">
            <div className="sidebar-container"><SearchFilter onFilterChange={handleFilterChange} /></div>
            <div className="main-content">
                <Searchbar />
                <div className="meal-grid">
                    {meals.map(meal => (
                        <MealTile key={meal.id} meal={meal} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
