import { useState } from 'react';

export const Login = ({ isAutheticated, setIsAuthenticated }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleUsernameChange = (e) => {
        console.log(e)
        setUsername(e.target.value)
    };

    const handlePasswordChange = (e) => {
        console.log(e)
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
            setIsAuthenticated(true)
        }
    };

    return (
        <div className="login-form">
            <form>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={username} onChange={handleUsernameChange} />

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />

                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
};