import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, ComputerLab, Register, Layout } from '../pages/index';

export const App = () => {

    const [isAutheticated, setIsAuthenticated] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout isAutheticated={isAutheticated}/>}>
                    {!isAutheticated && <Route index element={<Login isAutheticated={isAutheticated} setIsAuthenticated={setIsAuthenticated} />} />}
                    {!isAutheticated && <Route path="register" element={<Register />} />}
                    {isAutheticated && <Route path="computer-lab" element={<ComputerLab />} />}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};