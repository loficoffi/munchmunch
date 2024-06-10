
export default function Login() {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <div className="loginEmail">
                    <label htmlFor="email">Email:</label>
                    <input className="loginInputEmail" type="email" id="email" name="email"/>
                </div>
                <div className="loginPasswort" >
                    <label htmlFor="password">Passwort:</label>
                    <input className="loginInputPasswort" type="password" id="password" name="password"/>
                </div>
               <div className="loginButton" > <button type="submit">Einloggen</button> </div>
            </form>
        </div>
    );
}


