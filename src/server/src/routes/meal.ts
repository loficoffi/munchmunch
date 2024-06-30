import express from 'express';
import { Meal } from '../models/datamodels/Meal.js';

import db from "../db/connection.js";
import { DietType } from '../models/datamodels/enums/DietType.js';
import { Recipe } from '../models/datamodels/Recipe.js';
import { Collection } from 'mongoose';
import { ObjectId, WithId } from 'mongodb';

const router = express.Router();

router.get('/all', async (req, res) => {
    try {
        let collection = await db.collection("meals");
        let results = await collection.find({}).toArray();

        // Convert JSON results to Meal objects
        const meals: Meal[] = results.map((result) => ({
            id: result._id.toString(),
            name: result.name,
            diet: result.diet as DietType,
            cuisine: result.cuisine,
            recipe: result.recipe as Recipe,
            mainImage: result.mainImage,
            extraImage: result.extraImage
        }));
        console.log(meals);
        res.json(meals);  // Send the response only once
    } catch (error) {
        console.error("Error fetching meals:", error);
        res.status(500).json({ error: "Failed to fetch meals" });
    }
});

router.get('/:id', async (req, res) => {
    try {
        let collection = await db.collection("meals");
        let result = await collection.findOne({ _id: new ObjectId(req.params.id) });

        const meals: Meal = {
            id: result._id.toString(),
            name: result.name,
            diet: result.diet as DietType,
            cuisine: result.cuisine,
            recipe: result.recipe as Recipe,
            mainImage: result.mainImage,
            extraImage: result.extraImage
        };
        console.log("backend", meals);

        res.json(meals);
    } catch (error) {
        console.error("Error fetching meals:", error);
        res.status(500).json({ error: "Failed to fetch meals" });
    }

})

export default router;