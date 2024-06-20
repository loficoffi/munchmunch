import { Meal } from "../datamodels/Meal.js"
import { Category } from "../helper/Category.js"

export interface DashboardData {
    MealOfTheDay : Meal,
    Categories : Category[]
}