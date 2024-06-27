// db/models/user.js
import db from '../db/connection.js';
import bcrypt from 'bcryptjs';

/**
 * Finds a user by email
 * @param {string} email
 * @returns {Promise<Account | null>}
 */
export async function findUserByEmail(email) {
    return await db.collection('users').findOne({ email });
}

/**
 * Creates a new user
 * @param {Object} param0
 * @param {string} param0.fName
 * @param {string} param0.lName
 * @param {string} param0.email
 * @param {string} param0.password
 * @returns {Promise<Account>}
 */
export async function createUser({ fName, lName, email, password, }) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
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

    const result = await db.collection('users').insertOne(newUser);
    return result.ops[0];
}
