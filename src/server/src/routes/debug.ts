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

    //Recipe 1: Spagetthi mit Garnelen und Paprika-Peperoni Sauce
    let recipe1Ingredients: Ingredient[] = [
        {
            id: uuidv4(),
            name: 'Frischkäse Brunch (Paprika-Peperoni)',
            calories_100g: 211
        },
        {
            id: uuidv4(),
            name: 'Garnelen (geschält)',
            calories_100g: 73
        },
        {
            id: uuidv4(),
            name: 'Spagetthi',
            calories_100g: 158
        },
        {
            id: uuidv4(),
            name: 'Knoblauchzehe (frisch gehackt)',
            calories_100g: 141
        },
        {
            id: uuidv4(),
            name: 'Cocktailtomaten',
            calories_100g: 15
        },
    ]
    let recipe1NeededIngredients: NeededIngredient[] = [
        {
            id: uuidv4(),
            ingredient: recipe1Ingredients[0],
            amount: 1,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe1Ingredients[1],
            amount: 250,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe1Ingredients[2],
            amount: 500,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe1Ingredients[3],
            amount: 1,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe1Ingredients[4],
            amount: 250,
            unit: UnitType.gram,
        }
    ]

    let recipe1Recipe: Recipe[] = [
        {
            id: uuidv4(),
            name: "Spagetthi mit Garnelen und Paprika-Peperoni Sauce",
            addedTime: Date.now().toString(),
            difficulty: DifficultyType.easy,
            ingredients: recipe1NeededIngredients,
            cookConditionInfo: "In der Pfanne",
            cookTimeInfo: "20 Minuten",
            cookDescription: "* Für das Rezept zunächst die Spaghetti in kochendem Salzwasser bissfest kochen.\n" +
                "  \n" +
                "* Währenddessen die Cocktailtomaten halbieren und den Knoblauch hacken. Den Knoblauch in einer Pfanne mit Olivenöl anschwitzen.\n" +
                "  \n" +
                "* Danach Garnelen tiefgefrorenen hinzufügen. Sobald diese aufgetaut sind, die Tomaten beimengen und ca. 6 Minuten anbraten.\n" +
                "  \n" +
                "* Zum Schluss Brunch dazu und langsam zu einer Sauce verrühren. Die Pasta mit Garnelen in tiefen Tellern servieren und genießen.",
        }
    ]

    let recipe1Meal: Meal = {
        id: uuidv4(),
        name: "Spagetthi mit Garnelen und Paprika-Peperoni Sauce",
        diet: DietType.fish,
        cuisine: "Italienisch",
        recipe: recipe1Recipe[0],
        mainImage: "recipe1" + "mainImage",
        extraImage: [
            "recipe1" + "extraImage1",
            "recipe1" + "extraImage2",
            "recipe1" + "extraImage3",
        ]
    }

    //Recipe 2: Forelle im Backofen
    let recipe2Ingredients: Ingredient[] = [
        {
            id: uuidv4(),
            name: 'Forelle küchenfertig (ca. 250 Gramm pro Stück)',
            calories_100g: 103
        },
        {
            id: uuidv4(),
            name: 'Thymian',
            calories_100g: 26
        },
        {
            id: uuidv4(),
            name: 'Rosmarin',
            calories_100g: 6
        },
        {
            id: uuidv4(),
            name: 'Petersilie',
            calories_100g: 18
        },
        {
            id: uuidv4(),
            name: 'Knoblauchzehen',
            calories_100g: 141
        },
        {
            id: uuidv4(),
            name: 'Zitronensaft (Schuss)',
            calories_100g: 4
        }
    ]
    let recipe2NeededIngredients: NeededIngredient[] = [
        {
            id: uuidv4(),
            ingredient: recipe2Ingredients[0],
            amount: 2,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe2Ingredients[1],
            amount: 4,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe2Ingredients[2],
            amount: 4,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe2Ingredients[3],
            amount: 4,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe2Ingredients[4],
            amount: 2,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe2Ingredients[5],
            amount: 1,
            unit: UnitType.amount,
        }
    ]

    let recipe2Recipe: Recipe[] = [
        {
            id: uuidv4(),
            name: "Forelle im Backofen",
            addedTime: Date.now().toString(),
            difficulty: DifficultyType.middle,
            ingredients: recipe2NeededIngredients,
            cookConditionInfo: "Backofen 200 Grad (Ober-/Unterhitze)",
            cookTimeInfo: "25 Minuten",
            cookDescription: "* Für die Forelle im Backofen das Backrohr auf 200 Grad, Ober-/Unterhitze vorheizen.\n" +
                "  \n" +
                "* In der Zwischenzeit die Kräuter waschen und gut abtropfen lassen. Danach die küchenfertigen Forellen unter fließendem Wasser abspülen (innen und außen) und mit Küchenpapier trocken tupfen.\n" +
                "  \n" +
                "* Die Fische innen und außen mit Salz würzen und kräftig mit Öl einreiben. In die Bauchhöhle der Forellen Thymianzweige, Rosmarinzweige, Petersilie und eine kleingehackte Knoblauchzehe stecken und mit Pfeffer mit Zitronensaft würzen.\n" +
                "  \n" +
                "* Nun die Fische auf ein mit Backpapier ausgelegtes Backlech legen (oder in eine Alutasse) und im Backrohr etwa 15 Minuten braten. Damit der Fisch eine schöne Farbe bekommt, für die letzten 5 Minuten, die Backofen-Temperatur auf 240 Grad erhöhen.",
        }
    ]

    let recipe2Meal: Meal = {
        id: uuidv4(),
        name: "Forelle im Backofen",
        diet: DietType.fish,
        cuisine: "Europäisch",
        recipe: recipe2Recipe[0],
        mainImage: "recipe2" + "mainImage",
        extraImage: [
            "recipe2" + "extraImage1",
            "recipe2" + "extraImage2",
            "recipe2" + "extraImage3",
        ]
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
        mainImage: "recipe3" + "mainImage",
        extraImage: [
            "recipe3" + "extraImage1",
            "recipe3" + "extraImage2",
            "recipe3" + "extraImage3",
        ]
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
        mainImage: "recipe4" + "mainImage",
        extraImage: [
            "recipe4" + "extraImage1",
            "recipe4" + "extraImage2",
            "recipe4" + "extraImage3",
        ]
    }

    // create a new recipe
    let recipe7Ingredients: Ingredient[] = [
        {
            id: uuidv4(),
            name: 'Schnitzelfleisch',
            calories_100g: 242
        },
        {
            id: uuidv4(),
            name: 'Eier',
            calories_100g: 155
        },
        {
            id: uuidv4(),
            name: 'Weizenmehl',
            calories_100g: 364
        },
        {
            id: uuidv4(),
            name: 'Semmelbrösel',
            calories_100g: 395
        },
        {
            id: uuidv4(),
            name: 'Salz',
            calories_100g: 0
        },
        {
            id: uuidv4(),
            name: 'Butterschmalz',
            calories_100g: 900
        }
    ]

    let recipe7NeededIngredients: NeededIngredient[] = [
        {
            id: uuidv4(),
            ingredient: recipe7Ingredients[0],
            amount: 150,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe7Ingredients[1],
            amount: 3,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe7Ingredients[2],
            amount: 1,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe7Ingredients[3],
            amount: 1,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe7Ingredients[4],
            amount: 1,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe7Ingredients[5],
            amount: 1,
            unit: UnitType.amount,
        },
    ]

    let recipe7Recipe: Recipe[] = [
        {
            id: uuidv4(),
            name: "Wiener Schnitzel",
            addedTime: Date.now().toString(),
            difficulty: DifficultyType.easy,
            ingredients: recipe7NeededIngredients,
            cookConditionInfo: "Pfanne",
            cookTimeInfo: "30 Minuten",
            cookDescription: "",
        }
    ]

    let recipe7Meal: Meal = {
        id: uuidv4(),
        name: "Wiener Schnitzel",
        diet: DietType.meat,
        cuisine: "Deutsch",
        recipe: recipe7Recipe[0],
        mainImage: "recipe7" + "mainImage",
        extraImage: [
            "recipe7" + "extraImage1",
            "recipe7" + "extraImage2",
            "recipe7" + "extraImage3",
        ]
    }

    // create a new recipe
    let recipe8Ingredients: Ingredient[] = [
        {
            id: uuidv4(),
            name: 'Karotten',
            calories_100g: 25
        },
        {
            id: uuidv4(),
            name: 'Knollensellerie',
            calories_100g: 155
        },
        {
            id: uuidv4(),
            name: 'Zwiebel',
            calories_100g: 364
        },
        {
            id: uuidv4(),
            name: 'Semmelbrösel',
            calories_100g: 395
        },
        {
            id: uuidv4(),
            name: 'Gulasch vom Reh',
            calories_100g: 0
        },
        {
            id: uuidv4(),
            name: 'Öl',
            calories_100g: 900
        },
        {
            id: uuidv4(),
            name: 'Tomatenmark',
            calories_100g: 82
        },
        {
            id: uuidv4(),
            name: 'Rotwein, trocken',
            calories_100g: 85
        },
        {
            id: uuidv4(),
            name: 'Wildfond oder Fleischbrühe',
            calories_100g: 38
        },
        {
            id: uuidv4(),
            name: 'Thymian, getrocknet',
            calories_100g: 101
        },
        {
            id: uuidv4(),
            name: 'Lorbeerblätter',
            calories_100g: 353
        },
        {
            id: uuidv4(),
            name: 'Mehl',
            calories_100g: 364
        },
        {
            id: uuidv4(),
            name: 'Preiselbeerkonfitüre',
            calories_100g: 163
        },
        {
            id: uuidv4(),
            name: 'Wacholderbeeren',
            calories_100g: 386
        },
        {
            id: uuidv4(),
            name: 'Salz und Pfeffer',
            calories_100g: 0
        },
        {
            id: uuidv4(),
            name: 'Crème fraîche',
            calories_100g: 292
        },
    ]

    let recipe8NeededIngredients: NeededIngredient[] = [
        {
            id: uuidv4(),
            ingredient: recipe8Ingredients[0],
            amount: 200,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe8Ingredients[1],
            amount: 100,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe8Ingredients[2],
            amount: 1,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe8Ingredients[3],
            amount: 500,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe8Ingredients[4],
            amount: 3,
            unit: UnitType.bigSpoon,
        },
        {
            id: uuidv4(),
            ingredient: recipe8Ingredients[5],
            amount: 2,
            unit: UnitType.bigSpoon,
        },
        {
            id: uuidv4(),
            ingredient: recipe8Ingredients[6],
            amount: 200,
            unit: UnitType.ml,
        },
        {
            id: uuidv4(),
            ingredient: recipe8Ingredients[7],
            amount: 200,
            unit: UnitType.ml,
        },
        {
            id: uuidv4(),
            ingredient: recipe8Ingredients[8],
            amount: 1,
            unit: UnitType.smallSpoon,
        },
        {
            id: uuidv4(),
            ingredient: recipe8Ingredients[9],
            amount: 2,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe8Ingredients[10],
            amount: 2,
            unit: UnitType.smallSpoon,
        },
        {
            id: uuidv4(),
            ingredient: recipe8Ingredients[11],
            amount: 2,
            unit: UnitType.bigSpoon,
        },
        {
            id: uuidv4(),
            ingredient: recipe8Ingredients[12],
            amount: 4,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe8Ingredients[13],
            amount: 1,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe8Ingredients[14],
            amount: 1,
            unit: UnitType.amount,
        },
    ]

    let recipe8Recipe: Recipe[] = [
        {
            id: uuidv4(),
            name: "Rehragout mit Preiselbeeren",
            addedTime: Date.now().toString(),
            difficulty: DifficultyType.hard,
            ingredients: recipe8NeededIngredients,
            cookConditionInfo: "Topf",
            cookTimeInfo: "2 Stunden 5 Minuten",
            cookDescription: "",
        }
    ]

    let recipe8Meal: Meal = {
        id: uuidv4(),
        name: "Rehragout mit Preiselbeeren",
        diet: DietType.meat,
        cuisine: "Bayerisch",
        recipe: recipe8Recipe[0],
        mainImage: "recipe8" + "mainImage",
        extraImage: [
            "recipe8" + "extraImage1",
            "recipe8" + "extraImage2",
            "recipe8" + "extraImage3",
        ]
    }

    // create a new recipe
    let recipe9Ingredients: Ingredient[] = [
        {
            id: uuidv4(),
            name: 'Entenbrustfilet mit Haut',
            calories_100g: 125
        },
        {
            id: uuidv4(),
            name: 'Karotte',
            calories_100g: 24
        },
        {
            id: uuidv4(),
            name: 'Paprikaschote',
            calories_100g: 43
        },
        {
            id: uuidv4(),
            name: 'Frühlingszwiebel',
            calories_100g: 40
        },
        {
            id: uuidv4(),
            name: 'Zucchini',
            calories_100g: 25
        },
        {
            id: uuidv4(),
            name: 'Shiitake Pilze',
            calories_100g: 35
        },
        {
            id: uuidv4(),
            name: 'Cashewnüsse',
            calories_100g: 581
        },
        {
            id: uuidv4(),
            name: 'Ingwer',
            calories_100g: 70
        },
        {
            id: uuidv4(),
            name: 'Knoblauchzehen',
            calories_100g: 142
        },
        {
            id: uuidv4(),
            name: 'Mungobohnensprossen',
            calories_100g: 26
        },
        {
            id: uuidv4(),
            name: 'Chinakohl',
            calories_100g: 12
        },
        {
            id: uuidv4(),
            name: 'Zwiebeln',
            calories_100g: 42
        },
        {
            id: uuidv4(),
            name: 'Koriander',
            calories_100g: 40
        },
        {
            id: uuidv4(),
            name: 'Erdnussöl',
            calories_100g: 829
        },
        {
            id: uuidv4(),
            name: 'Kokosmilch',
            calories_100g: 178
        },
        {
            id: uuidv4(),
            name: 'Sojasauce',
            calories_100g: 51
        },
        {
            id: uuidv4(),
            name: 'Reisessig',
            calories_100g: 24
        },
        {
            id: uuidv4(),
            name: '5-Gewürz-Pulver',
            calories_100g: 316
        },
        {
            id: uuidv4(),
            name: 'Sesamöl',
            calories_100g: 884
        },
        {
            id: uuidv4(),
            name: 'Salz & Pfeffer',
            calories_100g: 0
        },
        {
            id: uuidv4(),
            name: 'Backpulver',
            calories_100g: 100
        },
        {
            id: uuidv4(),
            name: 'Ananassaft',
            calories_100g: 51
        },
        {
            id: uuidv4(),
            name: 'Gemüsebrühe',
            calories_100g: 1
        },
        {
            id: uuidv4(),
            name: 'Rohrohrzucker',
            calories_100g: 388
        },
        {
            id: uuidv4(),
            name: 'Speisestärke',
            calories_100g: 351
        },
        {
            id: uuidv4(),
            name: 'Ananas',
            calories_100g: 57
        },
    ]

    let recipe9NeededIngredients: NeededIngredient[] = [
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[0],
            amount: 600,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[1],
            amount: 1,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[2],
            amount: 1,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[3],
            amount: 1,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[4],
            amount: 0.5,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[5],
            amount: 150,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[6],
            amount: 50,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[7],
            amount: 10,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[8],
            amount: 2,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[9],
            amount: 200,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[10],
            amount: 200,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[11],
            amount: 100,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[12],
            amount: 20,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[13],
            amount: 1,
            unit: UnitType.liter,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[14],
            amount: 300,
            unit: UnitType.ml,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[15],
            amount: 90,
            unit: UnitType.ml,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[16],
            amount: 80,
            unit: UnitType.ml,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[17],
            amount: 3,
            unit: UnitType.smallSpoon,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[18],
            amount: 50,
            unit: UnitType.ml,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[19],
            amount: 1,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[20],
            amount: 0.5,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[21],
            amount: 50,
            unit: UnitType.ml,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[22],
            amount: 50,
            unit: UnitType.ml,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[23],
            amount: 30,
            unit: UnitType.gram,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[24],
            amount: 2,
            unit: UnitType.bigSpoon,
        },
        {
            id: uuidv4(),
            ingredient: recipe9Ingredients[25],
            amount: 200,
            unit: UnitType.gram,
        },
    ]

    let recipe9Recipe: Recipe[] = [
        {
            id: uuidv4(),
            name: "Knusprige Entenbrust Süss-Sauer",
            addedTime: Date.now().toString(),
            difficulty: DifficultyType.hard,
            ingredients: recipe9NeededIngredients,
            cookConditionInfo: "Wok",
            cookTimeInfo: "3 Stunden 30 Minuten",
            cookDescription: "",
        }
    ]

    let recipe9Meal: Meal = {
        id: uuidv4(),
        name: "Knusprige Entenbrust Süss-Sauer",
        diet: DietType.meat,
        cuisine: "Asiatisch",
        recipe: recipe9Recipe[0],
        mainImage: "recipe9" + "mainImage",
        extraImage: [
            "recipe9" + "extraImage1",
            "recipe9" + "extraImage2",
            "recipe9" + "extraImage3",
        ]
    }

    await db.collection('meals').drop();

    await db.collection('meals').insertOne(recipe1Meal);
    await db.collection('meals').insertOne(recipe2Meal);
    await db.collection('meals').insertOne(recipe3Meal);
    await db.collection('meals').insertOne(recipe4Meal);
    await db.collection('meals').insertOne(recipe7Meal);
    await db.collection('meals').insertOne(recipe8Meal);
    await db.collection('meals').insertOne(recipe9Meal);

    res.status(200).json({message: 'Recipe is successfully created! Congratulations!'});
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

    res.status(200).json({message: 'Kloesse is successfully created! Congratulations!'});
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

    res.status(200).json({message: 'Frittata is successfully created! Congratulations!'});
});

export default router;