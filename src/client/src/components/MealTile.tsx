import React from 'react';
import { useNavigate } from "react-router-dom";
import 'react-tooltip/dist/react-tooltip.css'
import { Meal } from '../models/datamodels/Meal';
import { getImageUrl } from '../utils/assetHelper.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faFish, faDrumstickBite, faCarrot } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import mealTileFallback from "../assets/images/mealTileFallback.png";

interface MealTileProps {
    meal: Meal;
}

const dietIcons = {
    fish: faFish,
    meat: faDrumstickBite,
    veggie: faCarrot,
    vegan: faLeaf,
};

function randomImg(imagePaths : string[]) : string {
    return imagePaths[Math.floor(Math.random() * imagePaths.length)];
}

const MealTile: React.FC<MealTileProps> = ({ meal }) => {
    const allImages = [...meal.extraImage, meal.mainImage]
    const [imgSrc, setImgSrc] = React.useState(getImageUrl(randomImg(allImages)));
    const navigate = useNavigate();

    const handleError = () => {
        setImgSrc(mealTileFallback);
    };

    const handleClick = () => {
        navigate(`/recipe/${meal.id}/${meal.name.toString().replace(' ', '_').toLowerCase()}`);
    };

    return (
        <div onClick={handleClick}
             className="meal-categories-swiper cursor-pointer meal-tile relative group overflow-hidden rounded-2xl w-full h-80">
            <img
                src={imgSrc}
                alt={meal.name}
                onError={handleError}
                className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-110 rounded-lg object-cover">
            </img>
            <div className="absolute top-0 left-0 bg-black bg-opacity-60 text-white p-1 rounded-tr-lg">
                <FontAwesomeIcon icon={dietIcons[meal.diet]}/>
            </div>
        </div>
    );
};

export default MealTile;