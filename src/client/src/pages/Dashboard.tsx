import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import AddButton from "../components/AddButton.tsx";
import spagetthiBG from '../assets/images/spagetthi-test-bg.jpg';
import chickenBG from '../assets/images/test-bg-dashboard.png'
import '../index.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUtensils} from '@fortawesome/free-solid-svg-icons'
import {DashboardData} from "../models/interfaces/DashboardData.ts";
import {fetchDashboardData} from "../services/dashboardService.ts";
import {getImageUrl} from "../utils/assetHelper.ts";
import FavoriteButton from "../components/FavoriteButton.tsx";
import MealCategory from '../components/MealCategory';

import {Simulate} from "react-dom/test-utils";
import {Account} from "../models/datamodels/Account.ts";
import {fetchUserData} from "../services/accountService.ts";
import api, {setAuthToken} from "../utils/api.ts";


export const Dashboard: React.FC = () => {
    const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [userData, setUserData] = useState<Account | null>(null);

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

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthToken(token);
            fetchUserData().then(userData => {
                setUserData(userData);
                setLoading(false);
            }).catch(err => {
                setError('Failed to fetch user data Dashboard');
                setLoading(false);
            });
        }
    }, []);

    const addFavoriteMeal = async() => {

        try {
            //create an updated profile in account with added favorite recipe
            const updatedProfile = {
                ...userData.profile,
                //add the recipe
                favouriteMeals: [...userData.profile.favouriteMeals, dashboardData.mealOfTheDay]
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
            console.error('Error updating user profile:', error);
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
                            <div className="flex">
                                <div className="mr-2">
                                    <AddButton />
                                </div>
                                <FavoriteButton onClick={addFavoriteMeal} />
                            </div>
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
            {error && <p>Error: {error}</p>}
        </div>
    );
}

export default Dashboard