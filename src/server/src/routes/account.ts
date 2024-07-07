import express, {Request, Response} from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import {Account} from "../models/datamodels/Account.js";
import db from "../db/connection.js";

const router = express.Router();

/* /account Route */

// /account/get GET-Method. This route returns the data of a registered account associated to the JWT token
// data that is to be sent via the request header.
router.get('/get', async (req: Request, res: Response) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, config.jwt_secret) as { id: string };

        if (decoded && decoded.id) {
            let userId = decoded.id;

            const user: Account = await db.collection<Account>('users').findOne({ id: userId });

            if (user) {
                return res.status(200).send(user);
            }

        } else {
            return res.status(401).json({ message: 'Invalid token' });
        }
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
})

export default router;
