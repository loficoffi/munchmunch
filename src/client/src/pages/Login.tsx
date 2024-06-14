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
        <div>
            <h2>Login</h2>
            <form action="Post">
                <div className="loginEmail">
                    <input className="loginInputEmail" onChange={(e)=> {setEmail(e.target.value)}} placeholder={"Email"} type="email" id="email" name="email"/>
                </div>
                <div className="loginPasswort" >
                    <input className="loginInputPasswort" onChange={(e)=> {setPassword(e.target.value)}} placeholder={"Password"} type="password" id="password" name="password"/>
                </div>
               <div className="loginButton" > <button onClick={submit} type="submit">Einloggen</button> </div>
            </form>
            <p>OR</p>
            <div>
                <Link to="/register">Hier Registrieren </Link>
            </div>
        </div>
    );
}


