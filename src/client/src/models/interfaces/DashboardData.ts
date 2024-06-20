import { Meal } from "../datamodels/Meal.js"
import { Category } from "../helper/Category.js"

export interface DashboardData {
    mealOfTheDay : Meal,
    categories : Category[]
}