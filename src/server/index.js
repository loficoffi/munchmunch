import express from "express";
import cors from "cors";
import path from "path";
import records from "./routes/record.js";
import { fileURLToPath } from 'url';
//import authRoutes from './routes/auth.js'; // Neue Datei für Authentifizierungsrouten
import './db/connection.js'; // Verbindung zur Datenbank

const PORT = process.env.PORT || 5050;
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
//app.use("/record", records);
app.use("/auth", authRoutes); // Authentifizierungsrouten hinzufügen
app.use(express.static(path.join(__dirname, "..", 'client', 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});