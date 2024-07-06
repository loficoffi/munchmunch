import express from 'express';
import { Meal } from '../models/datamodels/Meal.js';

import db from "../db/connection.js";
import { DietType } from '../models/datamodels/enums/DietType.js';
import { Recipe } from '../models/datamodels/Recipe.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

/* /meal Route */

// /meal/all GET-Method. This route returns all meals the database contains.
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
        //console.log(meals);
        res.json(meals);  // Send the response only once
    } catch (error) {
        console.error("Error fetching All meals:", error);
        res.status(500).json({ error: "Failed to fetch all meals" });
    }
});

// /meal/random GET-method. This route simply returns a random meal.
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

// /meal/:id GET-Method. This route returns the data associated with a specific meal when given a meal id.
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

// /meal/filters GET-Method. This method returns every available filter.
router.get('/filters', async (req, res) => {
    try {
        const mealsCollection = db.collection('meals');
        const cuisines = await mealsCollection.distinct('cuisine');
        const diets = await mealsCollection.distinct('diet');
        const difficulties = await mealsCollection.distinct('recipe.difficulty');

        res.json({
            cuisines,
            diets,
            difficulties
        });
    } catch (error) {
        console.error("Error fetching filters:", error);
        res.status(500).json({ error: "Failed to fetch filters" });
    }
});

// /meal/filtered GET-Method. This method returns all available meals, filtered by the given filters inside the request.
router.get('/filtered', async (req, res) => {
    try {
        const { cuisines, diets, difficulties } = req.query;

        let collection = await db.collection("meals");
        let query: any = {};

        if (cuisines && typeof cuisines === 'string') {
            query['cuisine'] = { $in: cuisines.split(',') };
        }
        if (diets && typeof diets === 'string') {
            query['diet'] = { $in: diets.split(',') };
        }
        if (difficulties && typeof difficulties === 'string') {
            query['recipe.difficulty'] = { $in: difficulties.split(',') };
        }

        let results = await collection.find(query).toArray();

        const meals: Meal[] = results.map(result => ({
            id: result._id.toString(),
            name: result.name,
            diet: result.diet as DietType,
            cuisine: result.cuisine,
            recipe: result.recipe as Recipe,
            mainImage: result.mainImage,
            extraImage: result.extraImage
        }));

        res.json(meals);
    } catch (error) {
        console.error("Error fetching filtered meals:", error);
        res.status(500).json({ error: "Failed to fetch filtered meals" });
    }
});

// /meal/updateProfile POST-method.
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

export default router;