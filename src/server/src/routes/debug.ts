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
    // create a new recipe
    let recipe3Ingredients: Ingredient[] = [
        {
            id: uuidv4(),
            name: 'Sesamöl',
            calories_100g: 884
        },
        {
            id: uuidv4(),
            name: 'Maisstärke',
            calories_100g: 91
        },
        {
            id: uuidv4(),
            name: 'Ingwer',
            calories_100g: 80
        },
        {
            id: uuidv4(),
            name: 'Knoblauchzehe',
            calories_100g: 149
        },
        {
            id: uuidv4(),
            name: 'Reiswein',
            calories_100g: 106
        },
        {
            id: uuidv4(),
            name: 'Tamari',
            calories_100g: 70
        },
        {
            id: uuidv4(),
            name: 'Ahornsirup',
            calories_100g: 247
        },
        {
            id: uuidv4(),
            name: 'Tofu Natur',
            calories_100g: 142
        },
        {
            id: uuidv4(),
            name: 'Chilli',
            calories_100g: 40
        },
        {
            id: uuidv4(),
            name: 'Bratöl',
            calories_100g: 819
        },
        {
            id: uuidv4(),
            name: 'Brokkoli',
            calories_100g: 142
        },
        {
            id: uuidv4(),
            name: 'Frühlingszwiebel',
            calories_100g: 42
        },
        {
            id: uuidv4(),
            name: 'Paprika',
            calories_100g: 42
        },


    ]
    let recipe3NeededIngredients: NeededIngredient[] = [
        {
            id: uuidv4(),
            ingredient: recipe3Ingredients[0],
            amount: 45,
            unit: UnitType.ml,
        },
        {
            id: uuidv4(),
            ingredient: recipe3Ingredients[1],
            amount: 6,
            unit: UnitType.smallSpoon,
        },
        {
            id: uuidv4(),
            ingredient: recipe3Ingredients[2],
            amount: 1,
            unit: UnitType.smallSpoon,
        },
        {
            id: uuidv4(),
            ingredient: recipe3Ingredients[3],
            amount: 2,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe3Ingredients[4],
            amount: 15,
            unit: UnitType.ml,
        },
        {
            id: uuidv4(),
            ingredient: recipe3Ingredients[5],
            amount: 90,
            unit: UnitType.ml,
        },
        {
            id: uuidv4(),
            ingredient: recipe3Ingredients[6],
            amount: 60,
            unit: UnitType.ml,
        },
        {
            id: uuidv4(),
            ingredient: recipe3Ingredients[7],
            amount: 400,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe3Ingredients[8],
            amount: 2,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe3Ingredients[9],
            amount: 30,
            unit: UnitType.ml,
        },
        {
            id: uuidv4(),
            ingredient: recipe3Ingredients[10],
            amount: 1,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe3Ingredients[11],
            amount: 1,
            unit: UnitType.amount,
        }
    ]

    let recipe3Recipe: Recipe[] = [
        {
            id: uuidv4(),
            name: "Tofu Stir Fry",
            addedTime: Date.now().toString(),
            difficulty: DifficultyType.easy,
            ingredients: recipe3NeededIngredients,
            cookConditionInfo: "Pfanne",
            cookTimeInfo: "30 Minuten",
            cookDescription: "",
        }
    ]

    let recipe3Meal: Meal = {
        id: uuidv4(),
        name: "Tofu Stir Fry",
        diet: DietType.vegan,
        cuisine: "Asiatisch",
        recipe: recipe3Recipe[0],
        mainImage: "..",
        extraImage: ["...", "..."]
    }

    // create a new recipe
    let recipe4Ingredients: Ingredient[] = [
        {
            id: uuidv4(),
            name: 'Bratöl',
            calories_100g: 819
        },
        {
            id: uuidv4(),
            name: 'Knoblauchzehe',
            calories_100g: 149
        },
        {
            id: uuidv4(),
            name: 'Zwiebel',
            calories_100g: 42
        },
        {
            id: uuidv4(),
            name: 'Tomatenmark',
            calories_100g: 38
        },
        {
            id: uuidv4(),
            name: 'Karotten',
            calories_100g: 39
        },
        {
            id: uuidv4(),
            name: 'Zucchini',
            calories_100g: 2.2
        },
        {
            id: uuidv4(),
            name: 'Kartoffeln',
            calories_100g: 75
        },
        {
            id: uuidv4(),
            name: 'Gemüsebrühe',
            calories_100g: 2
        },
        {
            id: uuidv4(),
            name: 'Tomatensauce',
            calories_100g: 40
        },
        {
            id: uuidv4(),
            name: 'Linsen',
            calories_100g: 116
        },
        {
            id: uuidv4(),
            name: 'Rosmarin',
            calories_100g: 131
        },
        {
            id: uuidv4(),
            name: 'Thymian',
            calories_100g: 328
        },
        {
            id: uuidv4(),
            name: 'Kurkuma',
            calories_100g: 338
        },



    ]
    let recipe4NeededIngredients: NeededIngredient[] = [
        {
            id: uuidv4(),
            ingredient: recipe4Ingredients[0],
            amount: 30,
            unit: UnitType.ml,
        },
        {
            id: uuidv4(),
            ingredient: recipe4Ingredients[1],
            amount: 2,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe4Ingredients[2],
            amount: 2,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe4Ingredients[3],
            amount: 30,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe4Ingredients[4],
            amount: 4,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe4Ingredients[5],
            amount: 1,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe4Ingredients[6],
            amount: 500,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe4Ingredients[7],
            amount: 1,
            unit: UnitType.liter,
        },
        {
            id: uuidv4(),
            ingredient: recipe4Ingredients[8],
            amount: 250,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe4Ingredients[9],
            amount: 190,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe4Ingredients[10],
            amount: 0.5,
            unit: UnitType.smallSpoon,
        },
        {
            id: uuidv4(),
            ingredient: recipe4Ingredients[11],
            amount: 0.5,
            unit: UnitType.smallSpoon,
        },
        {
            id: uuidv4(),
            ingredient: recipe4Ingredients[12],
            amount: 1,
            unit: UnitType.smallSpoon,
        },

    ]

    let recipe4Recipe: Recipe[] = [
        {
            id: uuidv4(),
            name: "Linsensuppe",
            addedTime: Date.now().toString(),
            difficulty: DifficultyType.easy,
            ingredients: recipe4NeededIngredients,
            cookConditionInfo: "Pfanne",
            cookTimeInfo: "30 Minuten",
            cookDescription: "",
        }
    ]

    let recipe4Meal: Meal = {
        id: uuidv4(),
        name: "Linsensuppe",
        diet: DietType.vegan,
        cuisine: "Deutsch",
        recipe: recipe4Recipe[0],
        mainImage: "..",
        extraImage: ["...", "..."]
    }


    await db.collection('meals').insertOne(newMeal);
    await db.collection('meals').insertOne(recipe3Meal);
    await db.collection('meals').insertOne(recipe4Meal);

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