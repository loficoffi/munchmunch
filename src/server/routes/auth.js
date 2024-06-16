import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db/connection.js';

const router = express.Router();

// Registrierungsroute
router.post('/register', async (req, res) => {
    const { fName, lName, email, password } = req.body;

    if (!fName || !lName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Überprüfe, ob der Benutzer bereits existiert
        const userExists = await db.collection('users').findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash das Passwort
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Erstelle den Benutzer
        const newUser = {
            fName,
            lName,
            email,
            password: hashedPassword
        };

        // Speichere den Benutzer in der Datenbank
        await db.collection('users').insertOne(newUser);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login-Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Überprüfe, ob der Benutzer existiert
        const user = await db.collection('users').findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Überprüfe das Passwort
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Erstelle und sende das JWT-Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
export default router;
