import { DifficultyType } from "./enums/DifficultyType.js";
import { NeededIngredient } from "./NeededIngredient.js";

//Type that defines a recipe
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