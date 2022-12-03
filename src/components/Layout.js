import React, {  useEffect } from 'react'
import { Navigate, Routes, Route, useParams, useNavigate, useMatch, useLocation, Outlet } from 'react-router-dom';

import Navbar from './general/Navbar';
import SignInPage from '../pages/SignInPage'
import CartesPage from '../pages/CartesPage'
import VoiceChat from '../pages/VoiceChat';
import WelcomePage from '../pages/WelcomePage';


function Main() {
    return (
        <div>
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
        </div>
    )
}


export default function Layout() {
    return (
        <Routes>
            <Route path="/signInPortal" element={<SignInPage />} />
            <Route path="Main" element={<Main />}>
                <Route path="Welcome" element={<WelcomePage />} />
            </Route>
            <Route
                path="*"
                element={<Navigate to="/Main/Welcome" />}
            />
        </Routes>
    )
}