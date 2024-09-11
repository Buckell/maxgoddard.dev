import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import AboutPage from "./App/AboutPage";
import ProjectsPage from "./App/ProjectsPage";
import SkillsPage from "./App/SkillsPage";
import Page404 from "./App/Page404";

document.title = 'Max Goddard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes path="/">
                <Route index element={<App />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="skills" element={<SkillsPage />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
