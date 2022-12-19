import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes path="/">
                <Route index element={<>Home</>} />
                <Route path="about" element={<>About</>} />
                <Route path='*' element={<>404</>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
