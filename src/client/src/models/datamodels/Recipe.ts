import {DifficultyType} from "./enums/DifficultyType.js";
import {NeededIngredient} from "./NeededIngredient.js";

export type Recipe = {
    id: string,
    name: string,
    addedTime: string;
    difficulty: DifficultyType,
    ingredients: NeededIngredient[],
    cookConditionInfo: string,
    cookTimeInfo: string,
    cookDescription: string,
}