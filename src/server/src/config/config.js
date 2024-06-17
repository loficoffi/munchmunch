import dotenv from 'dotenv';
console.log('Loading default .env from ./src/config/.env');
dotenv.config({
    path: './src/config/.env'
});
if (process.env.NODE_ENV) {
    console.log(`Loading .env file for environment: ${process.env.NODE_ENV}`);
    console.log(`Attempting to load from: ./src/config/.env.${process.env.NODE_ENV}`);
    dotenv.config({
        path: `./src/config/.env.${process.env.NODE_ENV}`
    });
    console.log(`.env config:`);
    console.log(`nodeEnv: ${process.env.NODE_ENV}`);
    console.log(`frontendURL: ${process.env.FRONTEND_URI}`);
    console.log(`mongoURI: ${process.env.ATLAS_URI}`);
    console.log(`port: ${process.env.PORT}`);
    console.log(`jwt_secret: ${process.env.JWT_SECRET}`);
}
export const config = {
    nodeEnv: process.env.NODE_ENV,
    frontendURL: process.env.FRONTEND_URI,
    mongoURI: process.env.ATLAS_URI || "",
    port: process.env.PORT || 5050,
    jwt_secret: process.env.JWT_SECRET || ""
};
