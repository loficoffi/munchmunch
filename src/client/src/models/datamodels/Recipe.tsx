import {DifficultyType} from "./enums/DifficultyType.tsx";
import {NeededIngredient} from "./NeededIngredient.tsx";

export type Recipe = {
    id: string,
    name: string,
    addedTime: string;
    difficulty: DifficultyType,
    ingredients: NeededIngredient[],
    cookConditionInfo: string,
    cookTimeInfo: Date,
    cookDescription: string,
}