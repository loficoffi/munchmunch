import config from "../config/config.ts";
import { Meal } from "../models/datamodels/Meal.ts";
import { DietType } from "../models/datamodels/enums/DietType.ts";
import { DifficultyType } from "../models/datamodels/enums/DifficultyType.ts";
import {
    faSeedling,
    faDrumstickBite,
    faFish,
} from "@fortawesome/free-solid-svg-icons";

// creates urls for the images. 
export function getImageUrl(mainImageName: string): string {
    return `${config.apiUrl}/image/${mainImageName}.png`;
}

// sets the colors of the difficulty tags based on their value
export const getDifficultyColor = (difficulty: DifficultyType): string => {
    switch (difficulty) {
        case DifficultyType.easy:
            return '#3F8345';
        case DifficultyType.middle:
            return '#FFB800';
        case DifficultyType.hard:
            return '#DB1A1A';
        default:
            return 'grey';
    }
};

// sets the colors and the icons of the diet type tags based on their value
export const getDietType = (diet: DietType) => {
    switch (diet) {
        case DietType.fish:
            return { icon: faFish, name: 'Fish', backgroundColor: 'purple' };
        case DietType.meat:
            return { icon: faDrumstickBite, name: 'Meat', backgroundColor: 'brown' };
        case DietType.veggie:
            return { icon: faSeedling, name: 'Veggie', backgroundColor: 'green' };
        case DietType.vegan:
            return { icon: faSeedling, name: 'Vegan', backgroundColor: 'darkgreen' };
        default:
            return { icon: faSeedling, name: 'Unknown', backgroundColor: 'grey' };
    }
};

// function for creating the tags for each meal dinamically
export const getTags = (meal: Meal) => {
    const difficultyTag = {
        name: meal.recipe.difficulty,
        backgroundColor: getDifficultyColor(meal.recipe.difficulty),
        icon: null,
    };

    const dietTag = getDietType(meal.diet);

    const cuisineTag = {
        name: meal.cuisine,
        backgroundColor: '#71226D',
        icon: null,
    };

    return [cuisineTag, dietTag, difficultyTag];
};