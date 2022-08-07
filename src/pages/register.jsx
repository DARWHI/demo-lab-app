import { useState } from 'react';

export const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifiedPassword, setVerifiedPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        const newUser = { username: username, password: password };
        const users = localStorage.getItem('lab-users');

        const updatedUsers = users ? [...users, newUser] : [newUser];

        localStorage.setItem('lab-users', updatedUsers);
    };

    const handleUsernameChange = (e) => {
        console.log(e)
        setUsername(e.target.value)
    };

    const handlePasswordChange = (e) => {
        console.log(e)
        setPassword(e.target.value)
    };

    const handleVerifiedPasswordChaneg = (e) => {
        console.log(e)
        setVerifiedPassword(e.target.value)
    };


    return (
        <div className="login-form">
            <form>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={username} onChange={handleUsernameChange} />

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />


                <label htmlFor="verified-password">Verify Password:</label>
                <input type="password" name="verified-password" id="verified-password" value={verifiedPassword} onChange={handleVerifiedPasswordChaneg} />

                <button onClick={handleRegister}>Register</button>
            </form>
        </div>
    )

};