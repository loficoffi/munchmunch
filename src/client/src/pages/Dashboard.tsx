import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import AddButton from "../components/AddButton.tsx";
import '../index.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUtensils, faHeart, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import {DashboardData} from "../models/interfaces/DashboardData.ts";
import {fetchDashboardData} from "../services/dashboardService.ts";
import {getImageUrl} from "../utils/assetHelper.ts";
import FavoriteButton from "../components/FavoriteButton.tsx";
import MealCategory from '../components/MealCategory';

import {Account} from "../models/datamodels/Account.ts";
import {fetchUserData} from "../services/accountService.ts";
import api, {setAuthToken} from "../utils/api.ts";
import { Meal } from '../models/datamodels/Meal.ts';


export const Dashboard: React.FC = () => {
    const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [faveMealWasAdded, setFaveMealAddStatus] = useState<boolean | null>(false);
    const [savedMealWasAdded, setSavedMealAddStatus] = useState<boolean | null>(false);

    const [userData, setUserData] = useState<Account | null>(null);

    // Fetches the dashboard data. Sets the loading state to false if successful, else displays an error message.
    useEffect(() => {
        fetchDashboardData().then(data => {
            setDashboardData(data);
            setLoading(false);
            console.log(data);
        }).catch(err => {
            setError('Failed to fetch dashboard data');
            setLoading(false);
        })
    }, []);

    //get userdata if token exists
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthToken(token);
            fetchUserData().then(userData => {
                setUserData(userData);
                setLoading(false);

                //check if mealoftheday already exists in users account for setting the right icon in add and fave button
                //with function "some" it gives true or false back
                const faveMealExistsAlready = userData.profile.favouriteMeals.some(meal => meal.id == dashboardData.mealOfTheDay.id);
                setFaveMealAddStatus(faveMealExistsAlready);

                const saveMealExistsAlready = userData.profile.savedMeals.some(meal => meal.id == dashboardData.mealOfTheDay.id);
                setSavedMealAddStatus(saveMealExistsAlready);

            }).catch(err => {
                setError('No user is logged in.');
                setLoading(false);
            });
        }
    }, [dashboardData]);


    const addFavoriteMeal = async () => {

        try {
            const checkIfMealExists = userData.profile.favouriteMeals.some(meal => meal.id == dashboardData.mealOfTheDay.id);
            let updateFavouriteMeals: Meal[];

            if (checkIfMealExists)
            {
                //get a new array with filter without the one which was in it
                updateFavouriteMeals = userData.profile.favouriteMeals.filter(meal => meal.id !== dashboardData.mealOfTheDay.id);
                setFaveMealAddStatus(false);
            }
            else
            {
                //add meal to favourite meals
                updateFavouriteMeals = [...userData.profile.favouriteMeals, dashboardData.mealOfTheDay];
                setFaveMealAddStatus(true);
            }

            //create an updated profile in account with added favorite recipe
            const updatedProfile = {
                ...userData.profile,
                favouriteMeals: updateFavouriteMeals
            };

            //create an updated account with updated profile
            const updatedUser = {
                ...userData,
                profile: updatedProfile
            };

            //also update it in backend
            const response = await api.post('/meal/updateProfile', updatedUser);
            console.log(response.data);

            setUserData(updatedUser); //update userdata in frontend
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    }

    const addSavedMeal = async () => {

        try {
            const checkIfSavedMealExists = userData.profile.savedMeals.some(meal => meal.id == dashboardData.mealOfTheDay.id);
            let updateSavedMeals: Meal[];

            if (checkIfSavedMealExists)
            {

                //get a new array without the one which was in it
                updateSavedMeals = userData.profile.savedMeals.filter(meal => meal.id !== dashboardData.mealOfTheDay.id);
                setSavedMealAddStatus(false);
            }
            else
            {
                //add meal to favourite meals
                updateSavedMeals = [...userData.profile.savedMeals, dashboardData.mealOfTheDay];
                setSavedMealAddStatus(true);
            }

            //create an updated profile in account with added favorite recipe
            const updatedProfile = {
                ...userData.profile,
                savedMeals: updateSavedMeals
            };

            //create an updated account with updated profile
            const updatedUser = {
                ...userData,
                profile: updatedProfile
            };

            //also update it in backend
            const response = await api.post('/meal/updateProfile', updatedUser);
            console.log(response.data); // Erfolgsmeldung oder aktualisierte Benutzerdaten im Backend

            setUserData(updatedUser); //update userdata in frontend
        } catch (error) {
            console.error('Error updating user profile: ', error);
        }
    }

    return (
        <div>
            {dashboardData && (
                <div className="overflow-hidden">
                    <div className="main-meal-bg-img absolute bg-cover bg-center bg-no-repeat h-dvh w-full" style={{ backgroundImage: `url(${getImageUrl(dashboardData.mealOfTheDay.mainImage)})` }}/>
                    <div className="main-recipe-div mx-14">
                        <div className="main-recipe-infos w-2/4 md:w-1/2 mb-10 lg:w-2/3 xl:w-3/5">
                            <h1 className="main-recipe-title text-2xl md:text-5xl lg:text-5xl xl:text-6xl">{dashboardData.mealOfTheDay.name}</h1>
                            <div className="mt-2">
                                <Link to={`/recipe/${dashboardData.mealOfTheDay.id}/${dashboardData.mealOfTheDay.name.toString().replace(' ', '_').toLowerCase()}`} className="btn btn-primary rounded-2xl bg-black border border-munch-orange py-2 px-5 text-2xl text-white">
                                    <FontAwesomeIcon icon={faUtensils} className="utensils-icon" />
                                    <span className="to-recipe-title">Zum Gericht</span>
                                </Link>
                            </div>
                            {userData &&
                                <div className="flex">
                                    <div className="mr-2">
                                        <AddButton
                                            onClick={addSavedMeal}
                                            icon={savedMealWasAdded && userData && userData.profile ? faMinus : faPlus}/>
                                    </div>
                                    <FavoriteButton
                                        onClick={addFavoriteMeal}
                                        icon={faveMealWasAdded && userData && userData.profile ? faHeart : farHeart}
                                    />
                                </div>
                            }
                        </div>
                    </div>
                    <div className="meal-categories-container my-3 mx-14 overflow-hidden">
                        {dashboardData.categories.map(category => (
                            <MealCategory key={category.name} category={category} />
                        ))}
                    </div>
                </div>
            )}
            {!dashboardData && <p>Loading...</p>}
            {/*{error && <p>Error: {error}</p>}*/}
        </div>
    );
}

export default Dashboard