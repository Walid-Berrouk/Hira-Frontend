import React, { Component, useEffect } from 'react'
import { Navigate, Routes, Route, useParams, useNavigate, useMatch, useLocation } from 'react-router-dom';

import LogInPage from '../pages/LogInPage'
import CartesPage from '../pages/CartesPage'

export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
          cartes: [],
        }
      }


    render() {

        return (
            <Routes>
                <Route path="/logInPortal" element={<LogInPage />} />
                <Route
                    path="*"
                    element={<Navigate to="/logInPortal" />}
                />
            </Routes>
        )
    }
}