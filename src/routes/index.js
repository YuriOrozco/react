import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import index from './../components/LoginForm'
import LoggedUser from './../views/Auth/LoggedUser'
import Login from './../components/LoginForm'


export function NavigationApp() {
    //rutas de la navegación
    return (
        <Routes>
            <Route
                path="/"
                element={< Login />}
            />
            <Route path="/estudiantes"
                element={< LoggedUser />} />

        </Routes>
    )
}

