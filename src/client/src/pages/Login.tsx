import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import config from "../config/config.ts";
import { v4 as uuidv4 } from "uuid";
import api, { setAuthToken } from "../utils/api.ts";
import { fetchUserData } from "../services/accountService.ts";
import logo from "../assets/munchLogoBig.png";
import bgImage from "../assets/images/collageBg.png"; // Assuming you save the image in src/assets folder

// login page, where the user can log in with their email and password.
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // function for handling the login-button
  async function submit(e) {
    e.preventDefault();

    if (!email || !password) {
      console.log("Email and Password are required");
      return;
    }

    try {
      const loginUser = {
        id: uuidv4(),
        profile: {
          id: uuidv4(),
          firstName: "",
          lastName: "",
          profileImage: "",
          favouriteMeals: [],
          savedMeals: [],
        },
        email: email,
        password: password,
      };
      //sending post request to backend for authorization the data
      const response = await api.post(`${config.apiUrl}/auth/login`, loginUser);

      const { token } = response.data;

      // Token im localStorage speichern
      localStorage.setItem("token", token);
      console.log(token);
      setAuthToken(token);
      console.log("Login successful");

      console.log(await fetchUserData());

      // Weiterleitung
      navigate("/");
    } catch (e) {
      console.log(e.response.data); // Detaillierte Fehlermeldung vom Server
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col items-center w-96">
        <Link to="/" className="mb-12">
          <img src={logo} alt="Munch Logo" className="w-56" />
        </Link>
        <div className="bg-gray-900 p-8 rounded-lg shadow-2xl shadow-black w-full max-w-md">
          <form onSubmit={submit}>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Passwort"
                type="password"
                id="password"
                name="password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-200">
                  Email merken
                </label>
              </div>
              <div>
                <a href="#" className="text-sm text-orange-600 hover:underline">
                  Hilfe?
                </a>
              </div>
            </div>
            <button className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-semibold transition duration-200">
              Anmelden
            </button>
          </form>
          <p className="mt-6 text-center text-gray-500">
            Noch kein Konto?{" "}
            <Link to="/register" className="text-orange-600 hover:underline">
              Hier registrieren
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
