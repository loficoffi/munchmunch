import {Meal} from "./Meal.tsx";

export type AccountProfile = {
    id: string,
    firstName: string,
    lastName: string,
    profileImage: string,
    favouriteMeals: Meal[],
    savedMeals: Meal[]
}