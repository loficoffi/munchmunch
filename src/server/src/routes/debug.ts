import express from 'express';

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

/* /debug Route */

// /debug GET-Method. This Route regenerates all of the recipes, meals and other test data used for our project.
// The individual recipes are also defined in here. After the instances are created, the db collection is regenerated with the new data.
router.get("/", async (req, res) => {

    //Recipe 1: Spaghetti mit Garnelen und Paprika-Peperoni Sauce
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
            name: 'Spaghetti',
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
            name: "Spaghetti mit Garnelen und Paprika-Peperoni Sauce",
            addedTime: Date.now().toString(),
            difficulty: DifficultyType.easy,
            ingredients: recipe1NeededIngredients,
            cookConditionInfo: "In der Pfanne",
            cookTimeInfo: "20 Minuten",
            cookDescription: "## Schritt 1\n" +
                "Spaghetti in kochendem Salzwasser bissfest kochen.\n" +
                "\n" +
                "## Schritt 2\n" +
                "Cocktailtomaten halbieren, Knoblauch hacken, und Knoblauch in Olivenöl anschwitzen.\n" +
                "\n" +
                "## Schritt 3\n" +
                "Tiefgefrorene Garnelen hinzufügen, auftauen lassen, Tomaten zugeben und ca. 6 Minuten anbraten.\n" +
                "\n" +
                "## Schritt 4\n" +
                "Brunch unterrühren, bis eine Sauce entsteht. Spaghetti mit Sauce servieren.",
        }
    ]

    let recipe1Meal: Meal = {
        id: uuidv4(),
        name: "Spaghetti mit Garnelen und Paprika-Peperoni Sauce",
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
            cookDescription: "## Schritt 1\n" +
                "Für die Forelle im Backofen das Backrohr auf 200 Grad, Ober-/Unterhitze vorheizen.\n" +
                "\n" +
                "## Schritt 2\n" +
                "In der Zwischenzeit die Kräuter waschen und gut abtropfen lassen.\n" +
                "\n" +
                "## Schritt 3\n" +
                "Danach die küchenfertigen Forellen unter fließendem Wasser abspülen (innen und außen) und mit Küchenpapier trocken tupfen.\n" +
                "\n" +
                "## Schritt 4\n" +
                "Die Fische innen und außen mit Salz würzen und kräftig mit Öl einreiben. In die Bauchhöhle der Forellen Thymianzweige, Rosmarinzweige, Petersilie und eine kleingehackte Knoblauchzehe stecken und mit Pfeffer und Zitronensaft würzen.\n" +
                "\n" +
                "## Schritt 5\n" +
                "Nun die Fische auf ein mit Backpapier ausgelegtes Backblech legen (oder in eine Alutasse) und im Backrohr etwa 15 Minuten braten. Damit der Fisch eine schöne Farbe bekommt, für die letzten 5 Minuten die Backofen-Temperatur auf 240 Grad erhöhen.",
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
            cookDescription: "## Schritt 1\n" +
                "Reis nach Anleitung zubereiten. Brokkoli nach Belieben kurz dünsten.\n" +
                "\n" +
                "## Schritt 2\n" +
                "Tofu aus der Verpackung nehmen, in ein Küchentuch einwickeln und trocken pressen.\n" +
                "\n" +
                "## Schritt 3\n" +
                "Sesamöl, Maisstärke, Ingwer, Knoblauch, Reiswein, Tamari, Ahornsirup in einer Schüssel verquirlen.\n" +
                "\n" +
                "## Schritt 4\n" +
                "Tofu in kleine Stücke schneiden.\n" +
                "\n" +
                "## Schritt 5\n" +
                "Tofu mit Tamari, Sesamöl, Chilis, Ahornsirup marinieren.\n" +
                "\n" +
                "## Schritt 6\n" +
                "Tofu in Maisstärke wälzen, dann in einer Pfanne mit Bratöl anbraten.\n" +
                "\n" +
                "## Schritt 7\n" +
                "Tofu aus der Pfanne nehmen.\n" +
                "\n" +
                "## Schritt 8\n" +
                "Gemüse in der Pfanne anschwitzen.\n" +
                "\n" +
                "## Schritt 9\n" +
                "Mit der Sauce ablöschen und köcheln lassen.\n" +
                "\n" +
                "## Schritt 10\n" +
                "Tofu wieder hinzufügen und köcheln, bis alles gut verbunden ist.\n" +
                "\n" +
                "## Schritt 11\n" +
                "Mit Reis, frischem Koriander, Limetten, Sesam, Chili Sauce servieren.",
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
            cookDescription: "## Schritt 1\n" +
                "Berglinsen waschen, abtropfen lassen und für 15 Minuten in Brühe kochen.\n" +
                "\n" +
                "## Schritt 2\n" +
                "Kartoffeln und Suppengrün waschen, schälen und fein würfeln. In einem zweiten Topf Butterschmalz erhitzen und das Gemüse darin andünsten.\n" +
                "\n" +
                "## Schritt 3\n" +
                "Die gekochten Linsen samt Brühe über das angedünstete Gemüse geben und alles zusammen nochmals 10 Minuten köcheln lassen.\n" +
                "\n" +
                "## Schritt 4\n" +
                "Petersilie waschen, trocknen, hacken und zur Suppe geben. Mit Weißweinessig, Salz und Pfeffer abschmecken. Nach Belieben mit Schnittlauch garnieren.",
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

    let recipe5Ingredients: Ingredient[] = [
        {
            id: uuidv4(),
            name: 'SpeiseStaerke',
            calories_100g: 381
        },
        {
            id: uuidv4(),
            name: 'alte Semmel',
            calories_100g: 310
        },
        {
            id: uuidv4(),
            name: 'SpeiseStaerke',
            calories_100g: 381
        },
        {
            id: uuidv4(),
            name: 'Kartoffeln, mehlig kochend',
            calories_100g: 71
        },
        {
            id: uuidv4(),
            name: 'Butter',
            calories_100g: 717
        }
    ]

    let recipe5NeededIngredients: NeededIngredient[] = [
        {
            id: uuidv4(),
            ingredient: recipe5Ingredients[0],
            amount: 0,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe5Ingredients[1],
            amount: 3,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe5Ingredients[2],
            amount: 1,
            unit: UnitType.kg,
        },
        {
            id: uuidv4(),
            ingredient: recipe5Ingredients[3],
            amount: 25,
            unit: UnitType.gram,
        },
    ]

    let recipe5Recipe: Recipe[] = [
        {
            id: uuidv4(),
            name: "Thüringer Klöße",
            addedTime: Date.now().toString(),
            difficulty: DifficultyType.middle,
            ingredients: recipe5NeededIngredients,
            cookConditionInfo: "Pfanne",
            cookTimeInfo: "1 Stunde 10 Minuten",
            cookDescription: "## Schritt 1\n" +
                "Die geschälten Kartoffeln roh mit der feinen Scheibe reiben. Zwei Drittel der Menge in einem Leinentuch gründlich ausdrücken. Die Masse soll so trocken wie nur irgend möglich sein. In Thüringen benutzt man dazu spezielle Pressen!\n" +
                "\n" +
                "## Schritt 2\n" +
                "Das verbliebene Drittel wird mit etwas Salz und Wasser zu einem sämigen Kartoffelbrei gekocht.\n" +
                "\n" +
                "## Schritt 3\n" +
                "Die ausgedrückten Kartoffelflocken werden in einen großen Topf gleichmäßig verteilt. Der kochendheiße, sämige Kartoffelbrei wird darüber gegossen und alles mit einer Holzkelle kräftig verrührt. Den Teig rühren, rühren, rühren bis er sich als großer Kloß vom Topfboden löst. Der Kloßteig ist jetzt fertig.\n" +
                "\n" +
                "## Schritt 4\n" +
                "Brötchen in kleine Würfel schneiden und in etwas Butter goldbraun braten.\n" +
                "\n" +
                "## Schritt 5\n" +
                "Einen großen Topf mit reichlich kräftig gesalzenem Wasser zum Kochen bringen. Hitze zurück drehen bis das Wasser nur noch siedet, nicht mehr sprudelt.\n" +
                "\n" +
                "## Schritt 6\n" +
                "Mit angefeuchteten Händen Klöße aus der noch warmen Masse abdrehen, in die Mitte eines jeden Kloßes einige der Semmelwürfel einarbeiten. Nach 10-15 Minuten schwimmen die Klöße an der Oberfläche und sind servierfähig.\n" +
                "\n" +
                "## Schritt 7\n" +
                "Klöße schmecken mit Semmelbutter besonders gut. Dazu einfach Semmelbrösel in Butter goldbraun braten und über die Klöße geben."
        }
    ]

    let recipe5Meal: Meal = {
        id: uuidv4(),
        name: "Thüringer Klöße",
        diet: DietType.veggie,
        cuisine: "Deutsch",
        recipe: recipe5Recipe[0],
        mainImage: "recipe5" + "mainImage",
        extraImage: [
            "recipe5" + "extraImage1",
            "recipe5" + "extraImage2",
            "recipe5" + "extraImage3",
        ]
    }

    let recipe6Ingredients: Ingredient[] = [
        {
            id: uuidv4(),
            name: 'Paprikaschote',
            calories_100g: 282
        },
        {
            id: uuidv4(),
            name: 'Zucchini',
            calories_100g: 17
        },
        {
            id: uuidv4(),
            name: 'Eier',
            calories_100g: 155
        },
        {
            id: uuidv4(),
            name: 'Olivenöl',
            calories_100g: 884
        }
    ]

    let recipe6NeededIngredients: NeededIngredient[] = [
        {
            id: uuidv4(),
            ingredient: recipe6Ingredients[0],
            amount: 2,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe6Ingredients[1],
            amount: 1,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe6Ingredients[2],
            amount: 6,
            unit: UnitType.amount,
        },
        {
            id: uuidv4(),
            ingredient: recipe6Ingredients[3],
            amount: 4,
            unit: UnitType.smallSpoon,
        },
    ]

    let recipe6Recipe: Recipe[] = [
        {
            id: uuidv4(),
            name: "Frittata",
            addedTime: Date.now().toString(),
            difficulty: DifficultyType.easy,
            ingredients: recipe6NeededIngredients,
            cookConditionInfo: "Backofen 180C",
            cookTimeInfo: "35 Minuten",
            cookDescription: "## Schritt 1\n" +
                "Paprikaschoten putzen, entkernen und in 2 cm große Würfel schneiden.\n" +
                "\n" +
                "## Schritt 2\n" +
                "Zucchini putzen, längs halbieren und in 1 cm breite Scheiben schneiden. Frischkäse, Eier, Salz und Cayennepfeffer in ein hohes Gefäß geben und mit dem Schneidstab pürieren.\n" +
                "\n" +
                "## Schritt 3\n" +
                "Olivenöl in einer beschichteten, feuerfesten Pfanne (ca. 22 cm Ø) erhitzen. Gemüse darin bei mittlerer Hitze 8-10 Minuten dünsten. Eier-Frischkäsemasse darüber gießen und zugedeckt ca. 2-3 Minuten stocken lassen.\n" +
                "\n" +
                "## Schritt 4\n" +
                "Frittata offen im heißen Ofen bei 180 Grad auf der mittleren Schiene ca. 15-20 Minuten fertig backen (Umluft nicht empfehlenswert). Die Eier-Frischkäsemasse soll durchgehend gestockt sein.\n" +
                "\n" +
                "## Schritt 5\n" +
                "Frittata vorsichtig vom Pfannenrand lösen, auf einen großen Teller gleiten lassen und in Stücke schneiden."

        }
    ]

    let recipe6Meal: Meal = {
        id: uuidv4(),
        name: "Frittata",
        diet: DietType.veggie,
        cuisine: "Italienisch",
        recipe: recipe6Recipe[0],
        mainImage: "recipe6" + "mainImage",
        extraImage: [
            "recipe6" + "extraImage1",
            "recipe6" + "extraImage2",
            "recipe6" + "extraImage3",
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
            cookDescription: "## Schritt 1\n" +
                "Die Kalbsschnitzel zwischen Klarsichtfolie legen und mit einem Fleischklopfer auf eine Dicke von 3-4 mm plattieren. Danach auf beiden Seiten salzen.\n" +
                "\n" +
                "## Schritt 2\n" +
                "Drei flache Teller vorbereiten: einen mit Mehl, einen mit verquirlten Eiern und einen mit Semmelbröseln. Die Eier leicht salzen und verquirlen.\n" +
                "\n" +
                "## Schritt 3\n" +
                "Die Schnitzel zuerst in Mehl wenden, überschüssiges Mehl abklopfen. Dann durch die Eier ziehen und schließlich in den Semmelbröseln wenden, ohne die Brösel fest anzudrücken.\n" +
                "\n" +
                "## Schritt 4\n" +
                "In einer großen Pfanne ausreichend Butterschmalz oder eine Mischung aus Pflanzenöl und Butter auf 175°C erhitzen. Es sollte genug Fett in der Pfanne sein, damit die Schnitzel darin schwimmen können.\n" +
                "\n" +
                "## Schritt 5\n" +
                "Die Schnitzel in das heiße Fett geben und durch vorsichtige Schwenkbewegungen der Pfanne dafür sorgen, dass das heiße Fett über die Oberseite der Schnitzel läuft. Dies erzeugt die charakteristische wellige Panade. Nach ca. 2-4 Minuten wenden und die andere Seite goldbraun backen.\n" +
                "\n" +
                "## Schritt 6\n" +
                "Die Schnitzel aus der Pfanne nehmen, auf Küchenpapier abtropfen lassen und sofort servieren. Mit Zitronenscheiben garnieren.\n",
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
            cookDescription: "## Schritt 1\n" +
                "Für das Rehragout zunächst das Wurzelwerk (Karotten, gelbe Rüben, Selleriewurzel), Schalotte sowie den Speck grob würfeln. Das Rehfleisch ebenfalls in mundgerechte Würfel schneiden, salzen, pfeffern und kurz stehen lassen.\n" +
                "\n" +
                "## Schritt 2\n" +
                "Die Wurzelwerk-, Zwiebel- und Speckwürfel in etwas heißem Fett kräftig anbraten. Das Fleisch zugeben und ebenfalls anbraten. Mit Rotweinlikör ablöschen und vollständig einkochen lassen. Preiselbeeren einmengen und sämtliche Gewürze zugeben. Wenig Suppe zugießen (das Fleisch soll nur knapp bedeckt sein) und je nach Qualität 70-90 Minuten weich dünsten. Währenddessen wiederholt umrühren und bei Bedarf frische Suppe nachgießen.\n" +
                "\n" +
                "## Schritt 3\n" +
                "Das weiche Fleisch mit einem Schaumlöffel herausheben und warm stellen. Je nach gewünschter Saucenmenge noch etwas Suppe zugießen und kräftig aufkochen lassen. Die Sauce passieren (abseihen). Mehl mit Sauerrahm glatt rühren, einrühren und mit Salz, Pfeffer und Zitronensaft abschmecken. Mollig einkochen lassen. Fleisch und gekochte Maroni zugeben und alles nochmals gut erwärmen.\n" +
                "\n" +
                "## Schritt 4\n" +
                "Das Rehragout auf vorgewärmten Tellern anrichten. Einen gehäuften Kaffeelöffel Preiselbeeren auf je eine Orangenscheibe geben und neben das Rehragout platzieren. Das Ragout selbst mit einem Tupfer Rahm garnieren. Als Beilage eignen sich Semmelknödel, Spätzle oder Kohlsprossen mit Speck.\n",
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
            cookDescription: "## Schritt 1\n" +
                "Die Ente abspülen, trocken tupfen und in Stücke schneiden. Mit Salz und Pfeffer würzen.\n" +
                "\n" +
                "## Schritt 2\n" +
                "Die Stücke in Speisestärke wälzen, bis sie gleichmäßig bedeckt sind.\n" +
                "\n" +
                "## Schritt 3\n" +
                "Öl in einem Wok oder einer tiefen Pfanne erhitzen und die Entenstücke darin knusprig braten. Herausnehmen und auf Küchenpapier abtropfen lassen.\n" +
                "\n" +
                "## Schritt 4\n" +
                "Paprika, Möhren und Ananas klein schneiden. Knoblauch und Ingwer fein hacken.\n" +
                "\n" +
                "## Schritt 5\n" +
                "Das Gemüse in der gleichen Pfanne anbraten, Knoblauch und Ingwer hinzufügen und kurz mitbraten.\n" +
                "\n" +
                "## Schritt 6\n" +
                "Sojasauce, Essig, Zucker, Ananassaft und Ketchup vermischen und zum Gemüse geben. Kurz aufkochen lassen.\n" +
                "\n" +
                "## Schritt 7\n" +
                "Die Entenstücke wieder in die Pfanne geben und alles gut vermengen.\n" +
                "\n" +
                "## Schritt 8\n" +
                "Mit Reis servieren und genießen.",
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
    await db.collection('meals').insertOne(recipe5Meal);
    await db.collection('meals').insertOne(recipe6Meal);
    await db.collection('meals').insertOne(recipe7Meal);
    await db.collection('meals').insertOne(recipe8Meal);
    await db.collection('meals').insertOne(recipe9Meal);

    res.status(200).json({ message: 'Recipe is successfully created! Congratulations!' });
});

export default router;