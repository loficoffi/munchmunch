import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../models/User';
import { config } from "../config/config";
import { Account } from '../models/datamodels/Account';
import { AuthResponse } from '../models/datamodels/types';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { fName, lName, email, password } = req.body;

    if (!fName || !lName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const userExists = await findUserByEmail(email);
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser: Account = await createUser({ fName, lName, email, password });

        const token = jwt.sign({ id: newUser.id }, config.jwt_secret, {
            expiresIn: '1h',
        });

        const response: AuthResponse = { token, user: newUser };
        res.status(201).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, config.jwt_secret, {
            expiresIn: '1h',
        });

        const response: AuthResponse = { token, user };
        res.send(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
