import {Meal} from "./Meal.js";

export type AccountProfile = {
    id: string,
    firstName: string,
    lastName: string,
    profileImage: string,
    favouriteMeals: Meal[],
    savedMeals: Meal[]
}