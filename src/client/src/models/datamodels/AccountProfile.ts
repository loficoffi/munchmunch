import {Meal} from "./Meal.ts";

export type AccountProfile = {
    id: string,
    firstName: string,
    lastName: string,
    profileImage: string,
    favouriteMeals: Meal[],
    savedMeals: Meal[]
}