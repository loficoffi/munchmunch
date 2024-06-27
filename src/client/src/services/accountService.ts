import api from "../utils/api.ts";
import {Account} from "../models/datamodels/Account.ts";

// Function to fetch user data
export async function fetchUserData(): Promise<Account> {
    try {
        const response = await api.get('/account/get');
        return response.data; // Axios automatically parses the JSON, so you can return directly
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        // You might want to handle errors differently depending on your application's needs
        throw error; // Re-throwing the error after logging it to handle it further up in the component
    }
}