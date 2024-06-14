import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  axios from "axios"

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");

    async function submit(e)
    {
        e.preventDefault();

        // Überprüfe, ob alle Felder ausgefüllt sind
        if (!email || !password || !fName || !lName) {
            console.log("All fields are required");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5050/auth/register", {
                fName,
                lName,
                email,
                password
            });
            console.log(response.data);
        }
        catch (e){
            console.log(e.response.data);
        }

    }



    return (
        <form onSubmit={submit} >
            <div>
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
               <div className="RegButton"> <button className="RegButton" type="submit">Registrieren</button> </div>
                <p className="loginlink">
                    Bereits registriert? <Link to="/login">Hier einloggen</Link>
                </p>
            </div>
        </form>
    );
}
