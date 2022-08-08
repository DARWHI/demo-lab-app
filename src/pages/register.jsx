import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Register = ({ setIsAuthenticated }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifiedPassword, setVerifiedPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const newUser = { username, password };
        const users = localStorage.getItem('lab-users');

        const updatedUsers = users ? [...users, newUser] : [newUser];

        localStorage.setItem('lab-users', JSON.stringify(updatedUsers));

        if (newUser) {
            setIsAuthenticated(true);
            localStorage.setItem('current-user', username)
            navigate("../computer-lab", { replace: true, state: { username } });
        }
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const handleVerifiedPasswordChaneg = (e) => {
        setVerifiedPassword(e.target.value)
    };


    return (

        <div className="page-section">
            <div className="page-section-title">Register</div>
            <div className="login-form">
                <form>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" value={username} onChange={handleUsernameChange} />

                    <br />

                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />

                    <br />

                    <label htmlFor="verified-password">Verify Password:</label>
                    <input type="password" name="verified-password" id="verified-password" value={verifiedPassword} onChange={handleVerifiedPasswordChaneg} />

                    <br />

                    <button onClick={handleRegister}>Register</button>
                </form>
            </div>
        </div>
    )

};