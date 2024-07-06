import {DietType} from "./enums/DietType.ts";
import {Recipe} from "./Recipe.ts";

//Datamodel for the Meal
//More Details in Recipe.ts
export type Meal = {
    id: string,
    name: string,
    diet: DietType,
    cuisine: string,
    recipe: Recipe,
    mainImage: string,
    extraImage: string[]
}