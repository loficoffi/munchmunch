import {DietType} from "./enums/DietType.js";
import {Recipe} from "./Recipe.js";

export type Meal = {
    id: string,
    name: string,
    diet: DietType,
    cuisine: string,
    recipe: Recipe,
    mainImage: string,
    extraImage: string[]
}