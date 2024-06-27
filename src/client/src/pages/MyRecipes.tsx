import React, {useEffect, useState} from 'react';
import TagContainer from "../components/TagContainer.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faDrumstickBite, faFish } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import {Account} from "../models/datamodels/Account.ts";
import {fetchUserData} from "../services/accountService.ts";
import {setAuthToken} from "../utils/api.ts";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import MealTile from "../components/MealTile.tsx";
import {Tooltip} from "react-tooltip";

export const MyRecipes = () => {
    //array for the food category tags to render them in the tag-container
    const tags = [
        { name: 'Veggie', icon: <FontAwesomeIcon icon={faSeedling} />, backgroundColor: 'bg-veggie-green text-vegan-yellow', onClick: () => getRecipesFromTag('Veggie') },
        { name: 'Vegan', icon: <FontAwesomeIcon icon={faSeedling} />, backgroundColor: 'bg-vegan-yellow text-veggie-green', onClick: () => getRecipesFromTag('Vegan') },
        { name: 'Fleisch', icon: <FontAwesomeIcon icon={faDrumstickBite} />, backgroundColor: 'bg-meat-rosa text-white', onClick: () => getRecipesFromTag('Fleisch') },
        { name: 'Fisch', icon: <FontAwesomeIcon icon={faFish} />, backgroundColor: 'bg-fish-blue text-white', onClick: () => getRecipesFromTag('Fisch') },
    ];

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [userData, setUserData] = useState<Account | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthToken(token);
            fetchUserData().then(userData => {
                setUserData(userData);
                setLoading(false);
            }).catch(err => {
                setError('Failed to fetch user data Favourite Recipe View');
                setLoading(false);
            });
        }
    }, []);

    console.log(userData);

    //TODO: implemented function for getting all recipes with the clicked tag
    const getRecipesFromTag = (tagName: string) => {
        console.log(`Tag ${tagName} is clicked!`);
    };

    return (
        <div>
            <div className="myrecipes-container text-center mt-10 ml-0 mt-5 md:text-left md:ml-2">
                <div className="favorite-recipes">
                    <h1 className="text-2xl md:ml-14">
                        Lieblingsrezepte
                    </h1>
                    <div className="mt-5 ml-7 md:ml-14">
                        <TagContainer tags={tags}/>
                    </div>
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
                                {userData && userData.profile && userData.profile.favouriteMeals && (
                                    userData.profile.favouriteMeals.map((favouriteMeal, index) => (
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
                </div>
                <div className="saved-recipes mt-10">
                    <h1 className="text-2xl md:ml-14">
                        Gemerkte Rezepte
                    </h1>
                    <div className="mt-5 ml-7 md:ml-14">
                        <TagContainer tags={tags}/>
                    </div>
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
                                {userData && userData.profile && userData.profile.favouriteMeals && (
                                    userData.profile.favouriteMeals.map((favouriteMeal, index) => (
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
                </div>
            </div>

        </div>
    )
}

export default MyRecipes