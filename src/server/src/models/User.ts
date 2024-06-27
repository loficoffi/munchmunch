import { Collection, Document, InsertOneResult, WithId } from 'mongodb';
import db from '../db/connection';
import bcrypt from 'bcryptjs';

export interface AccountProfile {
    firstName: string;
    lastName: string;
    profileImage: string;
    favouriteMeals: string[];
    savedMeals: string[];
}

export interface Account {
    email: string;
    password: string;
    profile: AccountProfile;
}

/**
 * Finds a user by email
 * @param {string} email
 * @returns {Promise<Account | null>}
 */
export async function findUserByEmail(email: string): Promise<Account | null> {
    const result = await db.collection('users').findOne({ email });
    if (!result) {
        return null;
    }
    return result as unknown as Account; // Cast the result to Account type
}

/**
 * Creates a new user
 * @param {Object} param0
 * @param {string} param0.fName
 * @param {string} param0.lName
 * @param {string} param0.email
 * @param {string} param0.password
 * @param {string} [param0.profileImage]
 * @returns {Promise<Account>}
 */
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

    const newUser: Account = {
        email,
        password: hashedPassword,
        profile: {
            firstName: fName,
            lastName: lName,
            profileImage: profileImage || '',
            favouriteMeals: [],
            savedMeals: []
        }
    };

    const result: InsertOneResult<Document> = await db.collection('users').insertOne(newUser);
    const insertedUser = result.insertedId
        ? await db.collection('users').findOne({ _id: result.insertedId })
        : null;

    if (!insertedUser) {
        throw new Error('Error creating user');
    }

    return insertedUser as unknown as Account; // Cast the inserted user to Account type
}
