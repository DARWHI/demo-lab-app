import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, ComputerLab, Register, Layout } from '../pages/index';

export const App = () => {

    const [isAutheticated, setIsAuthenticated] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Login isAutheticated={isAutheticated} setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="register" element={<Register />} />
                    <Route path="computer-lab" element={<ComputerLab />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};