import React, { useState } from 'react';
import {Link} from "react-router-dom";
import  axios from "axios"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(null); // State zum Speichern des Tokens

    async function submit(e) {
        e.preventDefault();

        if (!email || !password) {
            console.log("Email and Password are required");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5050/auth/login", {
                email,
                password
            });
            const { token } = response.data;
            setToken(token); // Token im State speichern
            console.log("Login successful");
            // Weiterleitung oder Anzeige einer Erfolgsmeldung
        } catch (e) {
            console.log(e.response.data);  // Detaillierte Fehlermeldung vom Server
        }
    }



    return (
        <div className="bg-black">
            <div>
                <h1 className="title">Munch</h1>
                <h1 className="titleReverse">hcnuM</h1>
            </div>
            <form onSubmit={submit}>
                <div className="loginEmail">
                    <input className="loginInputEmail"
                           onChange={(e) => {setEmail(e.target.value)}}
                           placeholder={"Email"}
                           type="email"
                           id="email"
                           name="email"/>
                </div>
                <div className="loginPasswort">
                    <input className="loginInputPasswort"
                           onChange={(e) => {setPassword(e.target.value)}}
                           placeholder={"Password"}
                           type="password"
                           id="password"
                           name="password"/>
                </div>
                <div className="loginButton">
                    <button className="loginButtonInput" type="submit">Anmelden</button>
                </div>
            </form>
            <p className="or">OR</p>
            <div className="regLink" >
                <Link to="/register">Hier Registrieren </Link>
            </div>
        </div>
    );
}


