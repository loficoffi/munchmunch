import dotenv from 'dotenv';

console.log('Loading default .env from ./config/.env');
dotenv.config({
    path: './config/.env'
});
if (process.env.NODE_ENV) {
    console.log(`Loading .env file for environment: ${process.env.NODE_ENV}`);
    console.log(`Attempting to load from: ./config/.env.${process.env.NODE_ENV}`);
    dotenv.config({
        path: `./config/.env.${process.env.NODE_ENV}`
    });
}

export const config = {
    nodeEnv: process.env.NODE_ENV,
    frontendURL: process.env.FRONTEND_URI,
    mongoURI: process.env.ATLAS_URI || "",
    port: process.env.PORT || 5050
};