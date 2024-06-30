import express, {NextFunction, Request, Response} from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db/connection.js';
import { config } from "../config/config.js"
import {v4 as uuidv4} from "uuid";
import { Account } from "../models/datamodels/Account.js"

const router = express.Router();

// Registrierungsroute
router.post('/register', async (req, res) => {
    const parsedUser: Account = req.body;

    if (!parsedUser.profile.firstName || !parsedUser.profile.lastName || !parsedUser.email || !parsedUser.password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Überprüfe, ob der Benutzer bereits existiert
        const userExists = await db.collection('users').findOne({ email: parsedUser.email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash das Passwort
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(parsedUser.password, salt);

        const newUser: Account = {
            id: uuidv4(),
            profile: {
                id: uuidv4(),
                firstName: parsedUser.profile.firstName,
                lastName: parsedUser.profile.lastName,
                profileImage: '',
                favouriteMeals: [],
                savedMeals: [],
            },
            email: parsedUser.email,
            password: hashedPassword,
        };

        // Speichere den Benutzer in der Datenbank
        await db.collection<Account>('users').insertOne(newUser);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login-Route
router.post('/login', async (req, res) => {
    const parsedUser: Account = req.body;

    try {
        // Überprüfe, ob der Benutzer existiert
        const user = await db.collection('users').findOne({ email: parsedUser.email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Überprüfe das Passwort
        const isMatch = await bcrypt.compare(parsedUser.password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Erstelle und sende das JWT-Token
        const token = jwt.sign({ id: user.id }, config.jwt_secret, {
            expiresIn: '1h',
        });

        res.status(200).send({token});


    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
