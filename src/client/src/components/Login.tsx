
export default function Login() {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="password">Passwort:</label>
                    <input type="password" id="password" name="password"/>
                </div>
                <button type="submit">Einloggen</button>
            </form>
        </div>
    );
}


