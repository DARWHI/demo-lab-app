import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Login = ({ isAutheticated, setIsAuthenticated }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUsers = localStorage.getItem('lab-users') ? JSON.parse(localStorage.getItem('lab-users')) : [];

        const demoUsers = [{
            username: 'admin',
            password: 'admin'
        }];

        const allUsers = [...storedUsers, ...demoUsers];

        const user = allUsers.find(user => user.username === username && user.password === password);

        if (user) {
            setIsAuthenticated(true);
            localStorage.setItem('current-user', username)
            navigate("../computer-lab", { replace: true, state: { username } });
        }
    };

    return (
        <div className="page-section">
            <div className="page-section-title">Login</div>
            <div className="login-form">
                <form>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" value={username} onChange={handleUsernameChange} />

                    <br />

                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />

                    <br />

                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    )
};