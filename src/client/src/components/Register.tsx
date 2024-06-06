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
                    <h1>Munch</h1>
                </div>
                <div>
                    <h2>Entdecke und genieße mit MunchMunch! Deine kulinarische Reise beginnt hier. Probier's aus und lass dich inspirieren!</h2>
                </div>
                <div>
                    <label htmlFor="firstName">Vorname:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Nachname:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Passwort:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Passwort wiederholen:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formState.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Registrieren</button>
                <p>
                    Bereits registriert? <Link to="/login">Hier einloggen</Link>
                </p>
            </div>
        </form>
    );
}
