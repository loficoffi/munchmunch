import React, { useState } from 'react';
import {Link} from "react-router-dom";
import  axios from "axios"

export default function Login() {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

    async function submit(e)
    {
        e.preventDefault();

        try {
            await axios.post("/login", {email,password})
        }
        catch (e){
             console.log(e);
        }

    }


    return (
        <div className="bg-black">
            <div>
                <h1 className="title">Munch</h1>
                <h1 className="titleReverse">hcnuM</h1>
            </div>
            <form action="Post">
                <div className="loginEmail">
                    <input className="loginInputEmail" onChange={(e) => {
                        setEmail(e.target.value)
                    }} placeholder={"Email"} type="email" id="email" name="email"/>
                </div>
                <div className="loginPasswort">
                    <input className="loginInputPasswort" onChange={(e) => {
                        setPassword(e.target.value)
                    }} placeholder={"Password"} type="password" id="password" name="password"/>
                </div>
                <div className="loginButton">
                    <button className="loginButtonInput" onClick={submit} type="submit">Anmelden</button>
                </div>
            </form>
            <p>OR</p>
            <div className="regLink" >
                <Link to="/register">Hier Registrieren </Link>
            </div>
        </div>
    );
}


