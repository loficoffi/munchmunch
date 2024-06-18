import express from 'express';

// This will help us connect to the database
import db from "../db/connection.js";

import { Recipe } from "../models/datamodels/Recipe";
import { DifficultyType } from "../models/datamodels/enums/DifficultyType";
import { NeededIngredient } from "../models/datamodels/NeededIngredient";
import { Meal } from "../models/datamodels/Meal";

import { v4 as uuidv4 } from "uuid";
import { Ingredient } from "../models/datamodels/Ingredient";
import { UnitType } from "../models/datamodels/enums/UnitType";
import { DietType } from "../models/datamodels/enums/DietType";


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

router.post("/kloesse", async (req, res) => {
    let kloesse: Meal = {
        id: uuidv4(),
        name: "Thüringer Klösse",
        diet: DietType.veggie,
        cuisine: "German",
        recipe: {
            id: uuidv4(),
            name: "Thüringer Klösse",
            addedTime: "20",
            difficulty: DifficultyType.middle,
            ingredients: [
                {
                    id: uuidv4(),
                    ingredient: {
                        id: uuidv4(),
                        name: "Speisestaerke",
                        calories_100g: 2
                    },
                    amount: 1,
                    unit: UnitType.amount
                },
                {
                    id: uuidv4(),
                    ingredient: {
                        id: uuidv4(),
                        name: "alte Semmel",
                        calories_100g: 2
                    },
                    amount: 3,
                    unit: UnitType.amount
                },
                {
                    id: uuidv4(),
                    ingredient: {
                        id: uuidv4(),
                        name: "Kartoffeln, mehlig kochend",
                        calories_100g: 2
                    },
                    amount: 1,
                    unit: UnitType.kg
                },
                {
                    id: uuidv4(),
                    ingredient: {
                        id: uuidv4(),
                        name: "Butter",
                        calories_100g: 2
                    },
                    amount: 25,
                    unit: UnitType.gram
                },
            ],
            cookConditionInfo: "Pfanne",
            cookTimeInfo: "1 Stunde 10 Minuten",
            cookDescription: ""
        },
        mainImage: "..",
        extraImage: [
            "...",
            "..."
        ]
    }
    console.log("inserting frittata")
    await db.collection('meals').insertOne(kloesse);

    res.status(200).json({ message: 'Kloesse is successfully created! Congratulations!' });
});

router.get("/frittata", async (req, res) => {
    let frittata: Meal = {
        id: uuidv4(),
        name: "Gemüse Frittata",
        diet: DietType.veggie,
        cuisine: "italienisch",
        recipe: {
            id: uuidv4(),
            name: "Gemüse Frittata",
            addedTime: "20",
            difficulty: DifficultyType.easy,
            ingredients: [
                {
                    id: uuidv4(),
                    ingredient: {
                        id: uuidv4(),
                        name: "Paprikaschote",
                        calories_100g: 2
                    },
                    amount: 2,
                    unit: UnitType.amount
                },
                {
                    id: uuidv4(),
                    ingredient: {
                        id: uuidv4(),
                        name: "Zucchini",
                        calories_100g: 2
                    },
                    amount: 1,
                    unit: UnitType.amount
                },
                {
                    id: uuidv4(),
                    ingredient: {
                        id: uuidv4(),
                        name: "Eier",
                        calories_100g: 2
                    },
                    amount: 6,
                    unit: UnitType.amount
                },
                {
                    id: uuidv4(),
                    ingredient: {
                        id: uuidv4(),
                        name: "Öl",
                        calories_100g: 2
                    },
                    amount: 4,
                    unit: UnitType.smallSpoon
                },
            ],
            cookConditionInfo: "Ofen 180C",
            cookTimeInfo: "35 min",
            cookDescription: ""
        },
        mainImage: "..",
        extraImage: [
            "...",
            "..."
        ]
    }
    await db.collection('meals').insertOne(frittata);

    res.status(200).json({ message: 'Frittata is successfully created! Congratulations!' });
});

export default router;