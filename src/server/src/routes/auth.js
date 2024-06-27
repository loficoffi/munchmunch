import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../models/User.js';
import { config } from "../config/config.js";
import {Account} from '../models/datamodels/Account.js';
import { AuthResponse} from  '../models/datamodels/types.js';


const router = express.Router();

router.post('/register', async (req, res) => {
    const { fName, lName, email, password, profileImage } = req.body;

    if (!fName || !lName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const userExists = await findUserByEmail(email);
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser: Account = await createUser({ fName, lName, email, password, profileImage });

        const token = jwt.sign({ id: newUser._id }, config.jwt_secret, {
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

        const token = jwt.sign({ id: user._id }, config.jwt_secret, {
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
