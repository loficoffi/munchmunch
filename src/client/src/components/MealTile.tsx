import React from 'react';
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

const MealTile: React.FC<MealTileProps> = ({ meal }) => {
    const [imgSrc, setImgSrc] = React.useState(getImageUrl(meal.mainImage));

    const handleError = () => {
        setImgSrc(mealTileFallback);
    };

    return (
        <div className="meal-tile relative group overflow-hidden rounded-2xl h-max">
            <img
                src={imgSrc}
                alt={meal.name}
                onError={handleError}
                className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-110 rounded-lg object-cover"
            />
            <div className="absolute top-0 left-0 bg-black bg-opacity-60 text-white p-1 rounded-tr-lg">
                <FontAwesomeIcon icon={dietIcons[meal.diet]} />
            </div>
        </div>
    );
};

export default MealTile;