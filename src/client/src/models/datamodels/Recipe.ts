import {DifficultyType} from "./enums/DifficultyType.ts";
import {NeededIngredient} from "./NeededIngredient.ts";

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