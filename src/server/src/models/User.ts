import db from '../db/connection';
import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';
import { Account } from '../models/datamodels/Account';
import {AccountProfile} from '../models/datamodels/AccountProfile';

export async function findUserByEmail(email: string): Promise<Account | null> {
    const result = await db.collection('users').findOne({ email });
    return result as Account | null; // Cast the result to Account type
}

export async function createUser({
                                     fName,
                                     lName,
                                     email,
                                     password,
                                     profileImage
                                 }: {
    fName: string;
    lName: string;
    email: string;
    password: string;
    profileImage?: string;
}): Promise<Account> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newProfile: {
        firstName: string;
        lastName: string;
        savedMeals: any[];
        favouriteMeals: any[];
        profileImage: string
    } = {
        firstName: fName,
        lastName: lName,
        profileImage: profileImage || '',
        favouriteMeals: [],
        savedMeals: []
    };

    const newUser: Account = {
        email,
        password: hashedPassword,
        profile: newProfile
    };

    const result = await db.collection('users').insertOne(newUser);
    const insertedUser = await db.collection('users').findOne({ _id: result.insertedId });

    if (!insertedUser) {
        throw new Error('Error creating user');
    }

    return insertedUser as Account; // Cast the inserted user to Account type
}
