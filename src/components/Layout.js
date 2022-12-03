import React, {  useEffect } from 'react'
import { Navigate, Routes, Route, useParams, useNavigate, useMatch, useLocation, Outlet } from 'react-router-dom';

import Navbar from './general/Navbar';

import SignInPage from '../pages/SignInPage'
import WelcomePage from '../pages/WelcomePage';
import Footer from './general/Footer';
import SignUpPage from '../pages/SignUpPage';
import VoiceChatPage from '../pages/VoiceChatPage';


function Main() {
    return (
        <div className='bg-blackRussian'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}


export default function Layout() {
    return (
        <Routes>
            <Route path="/signInPortal" element={<SignInPage />} />
            <Route path="/signUpPortal" element={<SignUpPage />} />
            <Route path="/signUpAssistance" element={<VoiceChatPage />} />
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