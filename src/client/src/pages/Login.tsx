import {Link} from "react-router-dom";

export default function Login() {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <div className="loginEmail">
                    <input className="loginInputEmail" placeholder={"Email"} type="email" id="email" name="email"/>
                </div>
                <div className="loginPasswort" >
                    <input className="loginInputPasswort" placeholder={"Password"} type="password" id="password" name="password"/>
                </div>
               <div className="loginButton" > <button type="submit">Einloggen</button> </div>
            </form>
            <p>OR</p>
            <div>
                <Link to="/register">Hier Registrieren </Link>
            </div>
        </div>
    );
}


