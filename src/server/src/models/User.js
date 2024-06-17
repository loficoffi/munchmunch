import db from '../db/connection.js';
import { ObjectId } from 'mongodb';
const usersCollection = db.collection('users');
export const createUser = async (userData) => {
    const result = await usersCollection.insertOne(userData);
    return result.insertedId;
};
export const findUserByEmail = async (email) => {
    return await usersCollection.findOne({ email });
};
export const findUserById = async (id) => {
    return await usersCollection.findOne({ _id: new ObjectId(id) });
};
