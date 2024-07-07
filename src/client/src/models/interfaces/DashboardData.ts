import { Meal } from "../datamodels/Meal.js"
import { Category } from "../helper/Category.js"

// interface for defining the Dashboarddata.
// Dashboard is a daily main meal and multiple categories for the recipes.
export interface DashboardData {
    mealOfTheDay: Meal,
    categories: Category[]
}