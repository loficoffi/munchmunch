import express from 'express';
import { Meal } from '../models/datamodels/Meal.js';

import db from "../db/connection.js";
import { DietType } from '../models/datamodels/enums/DietType.js';
import { Recipe } from '../models/datamodels/Recipe.js';
import { ObjectId } from 'mongodb';

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

//update userprofile if new data was added in frontend
router.post('/updateProfile', async (req, res) => {
    try {
        const updatedUser = req.body;

        //update user in database with new data in profile
        await db.collection('users').findOneAndUpdate(
            { _id: new ObjectId(updatedUser._id) },
            { $set: { profile: updatedUser.profile } },
        );

        res.status(200).send('User profile updated successfully');
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).send('Internal server error');
    }
});

router.get('/random', async (req, res) => {
    try {
        let collection = await db.collection("meals");

        let result = await collection.aggregate([
            { $sample: { size: 1 } }
        ]).toArray();

        if (!result) {
            return res.status(404).json({ error: "Meal not found" });
        }

        const meal: Meal = result.map((result) => ({
            id: result._id.toString(),
            name: result.name,
            diet: result.diet as DietType,
            cuisine: result.cuisine,
            recipe: result.recipe as Recipe,
            mainImage: result.mainImage,
            extraImage: result.extraImage
        })).at(0);

        res.json(meal);
    } catch (error) {
        console.error("Error fetching random meal:", error);
        res.status(500).json({ error: "Failed to fetch random meal" });
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

        res.json(meals);
    } catch (error) {
        console.error("Error fetching meals:", error);
        res.status(500).json({ error: "Failed to fetch meals" });
    }
});

export default router;