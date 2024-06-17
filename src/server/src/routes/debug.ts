import express from 'express';

// This will help us connect to the database
import db from "../db/connection.js";

import {Recipe} from "../models/datamodels/Recipe";
import {DifficultyType} from "../models/datamodels/enums/DifficultyType";
import {NeededIngredient} from "../models/datamodels/NeededIngredient";
import {Meal} from "../models/datamodels/Meal";

import {v4 as uuidv4} from "uuid";
import {Ingredient} from "../models/datamodels/Ingredient";
import {UnitType} from "../models/datamodels/enums/UnitType";
import {DietType} from "../models/datamodels/enums/DietType";


const router = express.Router();

router.get("/", async (req, res) => {

    // create a new recipe
    let newIngredients: Ingredient[] = [
        {
            id: uuidv4(),
            name: 'Frischkäse Brunch (Paprika-Peperoni)',
            calories_100g: 2
        }
    ]
    let newNeededIngredients: NeededIngredient[] = [
        {
            id: uuidv4(),
            ingredient: newIngredients[0],
            amount: 1,
            unit: UnitType.amount,
        }
    ]

    let newRecipe: Recipe[] = [
        {
            id: uuidv4(),
            name: "Brunch Paprika-Peperoni Sauce Spagetthi mit Garnelen",
            addedTime: "20",
            difficulty: DifficultyType.easy,
            ingredients: newNeededIngredients,
            cookConditionInfo: "Pfanne",
            cookTimeInfo: "20 Minuten",
            cookDescription: "",
        }
    ]

    let newMeal: Meal = {
        id: uuidv4(),
        name: "Brunch Paprika-Peperoni Sauce Spagetthi mit Garnelen",
        diet: DietType.fish,
        cuisine: "Standard",
        recipe: newRecipe[0],
        mainImage: "..",
        extraImage: ["...", "..."]
    }

    await db.collection('meals').insertOne(newMeal);

    res.status(200).json({ message: 'Recipe is successfully created! Congratulations!' });
});

export default router;