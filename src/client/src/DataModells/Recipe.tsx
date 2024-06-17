import {DifficultyType} from "./enums/DifficultyType.tsx";
import {NeedidIngredient} from "./NeedidIngredient.tsx";

export type Recipe = {
    id: string,
    name: string,
    addedTime: string;
    difficulty: DifficultyType,
    ingredients: NeedidIngredient[],
    cookConditionInfo: string,
    cookTimeInfo: Date,
    cookDescription: string,
}