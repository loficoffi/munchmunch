import {Meal} from "./Meal.ts";

//Datamodel for the AccountProfile
export type AccountProfile = {
    id: string,
    firstName: string,
    lastName: string,
    profileImage: string,
    favouriteMeals: Meal[],
    savedMeals: Meal[]
}