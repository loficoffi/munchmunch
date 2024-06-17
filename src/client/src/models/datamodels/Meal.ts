import {DietType} from "./enums/DietType.ts";
import {Recipe} from "./Recipe.ts";

export type Meal = {
    id: string,
    name: string,
    diet: DietType,
    cuisine: string,
    recipe: Recipe,
    mainImage: string,
    extraImage: string[]
}