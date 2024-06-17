import {DietType} from "./enums/DietType.tsx";
import {Recipe} from "./Recipe.tsx";

export type Meal = {
    id: string,
    name: string,
    diet: DietType,
    cuisine: string,
    recipe: Recipe,
    mainImage: string,
    extraImage: string[]
}