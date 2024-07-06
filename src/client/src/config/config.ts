// Interface for config
interface Config {
    port: number;
    apiUrl: string;
}

// Global config object, which can be used by any module to determine current port and apiUrl.
// Read the environment variables using Vite's import.meta.env
const config : Config = {
    port: Number(import.meta.env.VITE_PORT),  // Convert to number as environment variables are read as strings
    apiUrl: import.meta.env.VITE_API_URL as string  // Type assertion for better type safety
};

// Export the configuration object
export default config;