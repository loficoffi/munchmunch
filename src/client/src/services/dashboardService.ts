import axios from 'axios';
import { DashboardData } from '../models/interfaces/DashboardData';
import config from '../config/config.ts';

// Function to fetch dashboard data
export async function fetchDashboardData(): Promise<DashboardData> {
    try {
        const response = await axios.get<DashboardData>(`${config.apiUrl}/api/dashboard`);
        return response.data; // Axios automatically parses the JSON, so you can return directly
    } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
        // You might want to handle errors differently depending on your application's needs
        throw error; // Re-throwing the error after logging it to handle it further up in the component
    }
}