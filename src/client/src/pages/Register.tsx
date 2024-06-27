import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config/config";
import { AuthResponse } from "../models/datamodels/types";

export default function Register() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [fName, setFName] = useState<string>("");
    const [lName, setLName] = useState<string>("");
    const [registrationMessage, setRegistrationMessage] = useState<string>("");
    const navigate = useNavigate();

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!email || !password || !fName || !lName) {
            setRegistrationMessage("Alle Felder sind erforderlich");
            return;
        }

        try {
            const response = await axios.post<AuthResponse>(`${config.apiUrl}/auth/register`, {
                fName,
                lName,
                email,
                password,
            });
            setRegistrationMessage("Registrierung erfolgreich!");
            const { token } = response.data;
            localStorage.setItem('token', token);
            navigate('/');
        } catch (error: any) {
            if (error.response.status === 400 && error.response.data.message === 'User already exists') {
                setRegistrationMessage("Benutzer mit dieser E-Mail existiert bereits");
            } else {
                setRegistrationMessage("Registrierung fehlgeschlagen. Bitte versuche es später erneut.");
            }
        }
    }

    return (
        <form onSubmit={submit} >
            <div className="bg-black ">
                <div>
                    <h1 className="title">Munch</h1>
                    <h1 className="titleReverse">hcnuM</h1>
                </div>
                <div>
                    <h2 className="description">Entdecke und genieße mit MunchMunch! Deine kulinarische Reise beginnt hier. Probier's aus und lass dich inspirieren!</h2>
                </div>
                <div className="fname">
                    <input className="inputfname"
                           placeholder="First Name"
                           type="text"
                           id="firstName"
                           name="firstName"
                           onChange={(e) => setFName(e.target.value)}
                    />
                </div>
                <div className="lname">
                    <input className="inputlname"
                           placeholder="Last Name"
                           type="text"
                           id="lastName"
                           name="lastName"
                           onChange={(e) => setLName(e.target.value)}
                    />
                </div>
                <div className="emailtag">
                    <input className="inputemail"
                           placeholder="Email"
                           type="email"
                           id="email"
                           name="email"
                           onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="passwordtag">
                    <input className="inputpassword"
                           placeholder="Password"
                           type="password"
                           id="password"
                           name="password"
                           onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="confirmPasswordtag">
                    <input className="inputconfirmPassword"
                           placeholder="Confirm Password"
                           type="password"
                           id="confirmPassword"
                           name="confirmPassword"
                    />
                </div>
                <div className="RegButton"> <button className="RegButtonInput" type="submit">Registrieren</button> </div>
                {registrationMessage && <p className="registrationMessage">{registrationMessage}</p>}
                <p className="loginlink">
                    Bereits registriert? <Link to="/login">Hier einloggen</Link>
                </p>
            </div>
        </form>
    );
}
