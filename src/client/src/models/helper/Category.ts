import { Meal } from "../datamodels/Meal.js"

// type for defining the meal category.
export type Category = {
    name: string,
    meals: Meal[]
}