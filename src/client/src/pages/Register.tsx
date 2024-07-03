import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import config from "../config/config.ts";
import { v4 as uuidv4 } from "uuid";
import api from "../utils/api.ts";
import logo from '../assets/munchLogoBig.png';
import bgImage from '../assets/images/collageBg.png'; // Assuming you save the image in src/assets folder

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [registrationMessage, setRegistrationMessage] = useState("");
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();

        // Check if all fields are filled
        if (!email || !password || !fName || !lName) {
            setRegistrationMessage("Alle Felder sind erforderlich");
            return;
        }

        try {
            const newUser = {
                id: uuidv4(),
                profile: {
                    id: uuidv4(),
                    firstName: fName,
                    lastName: lName,
                    profileImage: '',
                    favouriteMeals: [],
                    savedMeals: [],
                },
                email: email,
                password: password,
            };

            await api.post(`${config.apiUrl}/auth/register`, newUser);

            setRegistrationMessage("Registrierung erfolgreich!");

            // Redirect
            navigate('/login');
        } catch (error) {
            if (error.response.status === 400 && error.response.data.message === 'User already exists') {
                setRegistrationMessage("Benutzer mit dieser E-Mail existiert bereits");
            } else {
                setRegistrationMessage("Registrierung fehlgeschlagen. Bitte versuche es später erneut.");
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
             style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="flex flex-col items-center w-96">
                <Link to="/" className="mb-12">
                    <img src={logo} alt="Munch Logo" className="w-56"/>
                </Link>
                <div className="bg-gray-900 p-8 rounded-lg shadow-2xl shadow-black w-full max-w-md">
                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <input
                                className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                                onChange={(e) => { setFName(e.target.value) }}
                                placeholder="Vorname"
                                type="text"
                                id="firstName"
                                name="firstName"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                                onChange={(e) => { setLName(e.target.value) }}
                                placeholder="Nachname"
                                type="text"
                                id="lastName"
                                name="lastName"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                                onChange={(e) => { setEmail(e.target.value) }}
                                placeholder="Email"
                                type="email"
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                                onChange={(e) => { setPassword(e.target.value) }}
                                placeholder="Passwort"
                                type="password"
                                id="password"
                                name="password"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                                placeholder="Passwort wiederholen"
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                            />
                        </div>
                        <button className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-semibold transition duration-200">Registrieren</button>
                    </form>
                    {registrationMessage && <p className="mt-4 text-center text-red-500">{registrationMessage}</p>}
                    <p className="mt-6 text-center text-gray-500">Bereits registriert? <Link to="/login" className="text-orange-600 hover:underline">Hier einloggen</Link></p>
                </div>
            </div>
        </div>
    );
}