import React, {useEffect, useState} from 'react';
import TagContainer from "../components/TagContainer.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faDrumstickBite, faFish, faUtensils } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import {Account} from "../models/datamodels/Account.ts";
import {fetchUserData} from "../services/accountService.ts";
import {setAuthToken} from "../utils/api.ts";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import MealTile from "../components/MealTile.tsx";
import {Tooltip} from "react-tooltip";

export const MyRecipes = () => {
    //array for the favourite category tags to render them in the tag-container
    const favedTags = [
        { name: 'Alles', icon: <FontAwesomeIcon icon={faUtensils} />, backgroundColor: 'bg-munch-orange text-white', onClick: () => getFaveActiveTagName('Alles') },
        { name: 'Veggie', icon: <FontAwesomeIcon icon={faSeedling} />, backgroundColor: 'bg-veggie-green text-vegan-yellow', onClick: () => getFaveActiveTagName('Veggie') },
        { name: 'Vegan', icon: <FontAwesomeIcon icon={faSeedling} />, backgroundColor: 'bg-vegan-yellow text-veggie-green', onClick: () => getFaveActiveTagName('Vegan') },
        { name: 'Fleisch', icon: <FontAwesomeIcon icon={faDrumstickBite} />, backgroundColor: 'bg-meat-rosa text-white', onClick: () => getFaveActiveTagName('Fleisch') },
        { name: 'Fisch', icon: <FontAwesomeIcon icon={faFish} />, backgroundColor: 'bg-fish-blue text-white', onClick: () => getFaveActiveTagName('Fisch') },
    ];

    //array for the saved category tags to render them in the tag-container
    const savedTags = [
        { name: 'Alles', icon: <FontAwesomeIcon icon={faUtensils} />, backgroundColor: 'bg-munch-orange text-white', onClick: () => getSaveActiveTagName('Alles') },
        { name: 'Veggie', icon: <FontAwesomeIcon icon={faSeedling} />, backgroundColor: 'bg-veggie-green text-vegan-yellow', onClick: () => getSaveActiveTagName('Veggie') },
        { name: 'Vegan', icon: <FontAwesomeIcon icon={faSeedling} />, backgroundColor: 'bg-vegan-yellow text-veggie-green', onClick: () => getSaveActiveTagName('Vegan') },
        { name: 'Fleisch', icon: <FontAwesomeIcon icon={faDrumstickBite} />, backgroundColor: 'bg-meat-rosa text-white', onClick: () => getSaveActiveTagName('Fleisch') },
        { name: 'Fisch', icon: <FontAwesomeIcon icon={faFish} />, backgroundColor: 'bg-fish-blue text-white', onClick: () => getSaveActiveTagName('Fisch') },
    ];

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [activeFaveTag, setActiveFaveTag] = useState<string | null>(null);
    const [activeSaveTag, setActiveSaveTag] = useState<string | null>(null);
    const [userData, setUserData] = useState<Account | null>(null);

    const [activeFaveDietMealArray, setFaveDietMealArray] = useState([]);
    const [activeSaveDietMealArray, setSaveDietMealArray] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthToken(token);
            fetchUserData().then(userData => {
                setUserData(userData);
                setActiveFaveTag("Alles");
                setActiveSaveTag("Alles");
                setLoading(false);
            }).catch(err => {
                setError('Failed to fetch user data Favourite Recipe View');
                setLoading(false);
            });
        }
    }, []);


    //it only renders when activeCategory or userdata changes
    useEffect(() => {
        if (userData) {
            let faveMealsArray = [];
            switch (activeFaveTag) {
                case 'Alles':
                    faveMealsArray = userData.profile.favouriteMeals || [];
                    break;
                case 'Veggie':
                    faveMealsArray = userData.profile.favouriteMeals.filter(meal => meal.diet == "veggie") || [];
                    break;
                case 'Vegan':
                    faveMealsArray = userData.profile.favouriteMeals.filter(meal => meal.diet == "vegan") || [];
                    break;
                case 'Fleisch':
                    faveMealsArray = userData.profile.favouriteMeals.filter(meal => meal.diet == "meat") || [];
                    break;
                case 'Fisch':
                    faveMealsArray = userData.profile.favouriteMeals.filter(meal => meal.diet == "fish") || [];
                    break;
                default:
                    faveMealsArray = userData.profile.favouriteMeals|| [];
            }
            setFaveDietMealArray(faveMealsArray);
        }
    }, [activeFaveTag, userData]);

    useEffect(() => {
        if (userData) {
            let savedMealsArray = [];
            switch (activeSaveTag) {
                case 'Alles':
                    savedMealsArray = userData.profile.savedMeals || [];
                    break;
                case 'Veggie':
                    savedMealsArray = userData.profile.savedMeals.filter(meal => meal.diet == "veggie") || [];
                    break;
                case 'Vegan':
                    savedMealsArray = userData.profile.savedMeals.filter(meal => meal.diet == "vegan") || [];
                    break;
                case 'Fleisch':
                    savedMealsArray = userData.profile.savedMeals.filter(meal => meal.diet == "meat") || [];
                    break;
                case 'Fisch':
                    savedMealsArray = userData.profile.savedMeals.filter(meal => meal.diet == "fish") || [];
                    break;
                default:
                    savedMealsArray = userData.profile.savedMeals || [];
            }
            setSaveDietMealArray(savedMealsArray)
        }
    }, [activeSaveTag, userData]);


    //getting active tag name
    const getFaveActiveTagName = (tagName: string) => {
        setActiveFaveTag(tagName);
    };

    const getSaveActiveTagName = (tagName: string) => {
        setActiveSaveTag(tagName);
    };

    return (
        <div>
            <div className="myrecipes-container text-center mt-10 ml-0 mt-5 md:text-left md:ml-2">
                <div className="favorite-recipes">
                    <h1 className="text-2xl md:ml-14">
                        Lieblingsrezepte
                    </h1>
                    <div className="mt-5 ml-7 md:ml-14">
                        {userData ? (
                        <TagContainer tags={favedTags}/>
                        ) : <p className={"rounded-lg border border-munch-orange p-5 w-3/6 ml-16 md:ml-0"}>
                            Logge dich ein um Rezepte in den Favoriten zu speichern!</p>
                        }
                    </div>
                    {userData &&
                        <div className="meal-categories-container my-3 mx-14 overflow-hidden">
                            <div className="mb-15 relative w-full overflow-hidden">
                                <Swiper
                                    key={'swiper'}
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={24}
                                    slidesPerView={3}
                                    navigation
                                    pagination={{clickable: true}}
                                    breakpoints={{
                                        1024: {
                                            slidesPerView: 3,
                                        },
                                        600: {
                                            slidesPerView: 2,
                                        },
                                        480: {
                                            slidesPerView: 1,
                                        },
                                        0: {
                                            slidesPerView: 1,
                                        },
                                    }}
                                >
                                    {userData && userData.profile && activeFaveDietMealArray && (
                                        activeFaveDietMealArray.map((favouriteMeal, index) => (
                                            <SwiperSlide id={`${favouriteMeal.name}-${favouriteMeal.id}-${index}`}
                                                         key={`${favouriteMeal.name}-${favouriteMeal.id}-${index}`}>
                                                <div
                                                    data-tooltip-id={`meal-tooltip-${favouriteMeal.name}-${favouriteMeal.id}-${index}`}
                                                    data-tooltip-content={favouriteMeal.name}
                                                    data-tooltip-place="top"
                                                >
                                                    <MealTile meal={favouriteMeal}/>
                                                </div>
                                                <Tooltip
                                                    id={`meal-tooltip-${favouriteMeal.name}-${favouriteMeal.id}-${index}`}
                                                    place="top"
                                                    className="z-50"/>
                                            </SwiperSlide>
                                        ))
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    }
                </div>

                <div className="saved-recipes mt-10">
                    <h1 className="text-2xl md:ml-14">
                        Gemerkte Rezepte
                    </h1>
                        <div className="mt-5 ml-7 md:ml-14">
                            {userData ? (
                            <TagContainer
                                tags={savedTags}/>
                            ) : <p className={"rounded-lg border border-munch-orange p-5 w-3/6 ml-16 md:ml-0"}>
                                Logge dich ein um Rezepte in der Merkliste zu speichern!</p> }
                        </div>

                    {userData && (
                        <div className="meal-categories-container my-3 mx-14 overflow-hidden">
                        <div className="mb-24 relative w-full overflow-hidden">
                                <Swiper
                                    key={'swiper'}
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={24}
                                    slidesPerView={3}
                                    navigation
                                    pagination={{clickable: true}}
                                    breakpoints={{
                                        1024: {
                                            slidesPerView: 3,
                                        },
                                        600: {
                                            slidesPerView: 2,
                                        },
                                        480: {
                                            slidesPerView: 1,
                                        },
                                        0: {
                                            slidesPerView: 1,
                                        },
                                    }}
                                >
                                    {userData && userData.profile && activeSaveDietMealArray && (
                                        activeSaveDietMealArray.map((favouriteMeal, index) => (
                                            <SwiperSlide id={`${favouriteMeal.name}-${favouriteMeal.id}-${index}`}
                                                         key={`${favouriteMeal.name}-${favouriteMeal.id}-${index}`}>
                                                <div
                                                    data-tooltip-id={`meal-tooltip-${favouriteMeal.name}-${favouriteMeal.id}-${index}`}
                                                    data-tooltip-content={favouriteMeal.name}
                                                    data-tooltip-place="top"
                                                >
                                                    <MealTile meal={favouriteMeal}/>
                                                </div>
                                                <Tooltip id={`meal-tooltip-${favouriteMeal.name}-${favouriteMeal.id}-${index}`} place="top"
                                                     className="z-50"/>
                                        </SwiperSlide>
                                    ))
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default MyRecipes