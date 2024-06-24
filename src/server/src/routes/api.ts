import express from 'express';
import {Meal} from '../models/datamodels/Meal.js';
import {Category} from '../models/helper/Category.js';

import db from "../db/connection.js";
import {DietType} from '../models/datamodels/enums/DietType.js';
import {Recipe} from '../models/datamodels/Recipe.js';
import {DifficultyType} from "../models/datamodels/enums/DifficultyType.js";
import {DashboardData} from "../models/interfaces/DashboardData.js";
import {getSeedFromDate, shuffleArray} from "../utils/RandomHelper.js"
import getSeed = jest.getSeed;

const router = express.Router();

router.get('/dashboard', async (req, res) => {
    try {
        let collection = await db.collection("meals");
        let results = await collection.find({}).toArray();

        // Convert JSON results to Meal objects
        const meals: Meal[] = results.map(result => ({
            id: result._id.toString(),
            name: result.name,
            diet: result.diet as DietType,
            cuisine: result.cuisine,
            recipe: result.recipe as Recipe,
            mainImage: result.mainImage,
            extraImage: result.extraImage
        }));

        const categories: Category[] = [
            {
                name: "Diese Woche beliebt in Bayern",
                meals: [
                    meals.find(x => x.name == "Rehragout mit Preiselbeeren"),
                    meals.find(x => x.name == "Forelle im Backofen"),
                    meals.find(x => x.name == "Wiener Schnitzel"),
                    meals.find(x => x.name == "Spagetthi mit Garnelen und Paprika-Peperoni Sauce")
                ].map(value => ({value, sort: Math.random()}))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({value}) => value)
            },
            {
                name: "Zuletzt hinzugefügt",
                meals: meals.sort(x => Number(x.recipe.addedTime))
                    .map(value => ({value, sort: Math.random()}))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({value}) => value)
            },
            {
                name: "Aus der italienischen Küche 🇮🇹",
                meals: meals.filter(x => x.cuisine == "Italienisch")
                    .map(value => ({value, sort: Math.random()}))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({value}) => value)
            },
            {
                name: "Gesund & Nachhaltig",
                meals: meals.filter(x => x.diet == DietType.vegan || x.diet == DietType.veggie)
                    .map(value => ({value, sort: Math.random()}))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({value}) => value)
            },
            {
                name: "Rezepte für Jedermann",
                meals: meals.filter(x => x.recipe.difficulty == DifficultyType.easy)
                    .map(value => ({value, sort: Math.random()}))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({value}) => value)
            },
            {
                name: "Für Fischliebhaber",
                meals: meals.filter(x => x.diet == DietType.fish)
                    .map(value => ({value, sort: Math.random()}))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({value}) => value)
            },
            {
                name: "Was Deftiges gefällig?",
                meals: meals.filter(x => x.diet == DietType.meat)
                    .map(value => ({value, sort: Math.random()}))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({value}) => value)
            },
            {
                name: "Wenn's mal schnell gehen muss",
                meals: [
                    meals.find(x => x.name == "Wiener Schnitzel"),
                    meals.find(x => x.name == "Spagetthi mit Garnelen und Paprika-Peperoni Sauce"),
                ]
                    .map(value => ({value, sort: Math.random()}))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({value}) => value)
            },
        ]
            .map(value => ({value, sort: Math.random()}))
            .sort((a, b) => a.sort - b.sort)
            .map(({value}) => value)

        const randomMeal : Meal = shuffleArray(meals, getSeedFromDate())[0];
        //const randomMeal : Meal = meals.find(x => x.name == "Knusprige Entenbrust Süss-Sauer");

        const dashboardData : DashboardData = {
           mealOfTheDay : randomMeal, categories : categories
        }

        res.status(200).json(dashboardData);
    } catch (error) {
        console.error("Error fetching meals:", error);
        res.status(500).json({error: "Failed to fetch meals"});
    }
});

export default router;