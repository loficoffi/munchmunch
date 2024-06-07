import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface RegisterFormState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Register() {
    const [formState, setFormState] = useState<RegisterFormState>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formState.password !== formState.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Registrierungslogik hinzufügen
        console.log('Form submitted', formState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <h1 className="title">Munch</h1>
                    <h1 className="titleReverse">hcnuM</h1>
                </div>
                <div>
                <h2 className="description">Entdecke und genieße mit MunchMunch! Deine kulinarische Reise beginnt hier. Probier's aus und lass dich inspirieren!</h2>
                </div>
                <div className="fname">
                    <label htmlFor="firstName">Vorname:</label>
                    <input className="inputfname"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="lname">
                    <label htmlFor="lastName">Nachname:</label>
                    <input className="inputlname"
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="emailtag">
                    <label htmlFor="email">Email:</label>
                    <input className="inputemail"
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="passwordtag">
                    <label htmlFor="password">Passwort:</label>
                    <input className="inputpassword"
                        type="password"
                        id="password"
                        name="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="confirmPasswordtag">
                    <label htmlFor="confirmPassword">Passwort wiederholen:</label>
                    <input className="inputconfirmPassword"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formState.confirmPassword}
                        onChange={handleChange}
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
