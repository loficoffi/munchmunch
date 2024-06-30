import React, { useState } from 'react';
import { Link, useNavigate  } from "react-router-dom";
import  axios from "axios"
import config from "../config/config.ts";
import {Account} from "../models/datamodels/Account.ts";
import {v4 as uuidv4} from "uuid";
import api, { setAuthToken} from "../utils/api.ts";
import {fetchUserData} from "../services/accountService.ts";


export default function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function submit(e: { preventDefault: () => void; }) {
        e.preventDefault();

        if (!email || !password) {
            console.log("Email and Password are required");
            return;
        }

        try {

            const loginUser: Account = {
                id: uuidv4(),
                profile: {
                    id: uuidv4(),
                    firstName: '',
                    lastName: '',
                    profileImage: '',
                    favouriteMeals: [],
                    savedMeals: [],
                },
                email: email,
                password: password,
            };

            const response = await api.post(`${config.apiUrl}/auth/login`, loginUser);

            const { token } = response.data;

            // Token im localStorage speichern
            localStorage.setItem('token', token);
            console.log(token);
            setAuthToken(token);
            console.log("Login successful");

            console.log(await fetchUserData());

            // Weiterleitung
            navigate('/');
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