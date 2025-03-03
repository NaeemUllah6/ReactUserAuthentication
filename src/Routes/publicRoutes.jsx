import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Authentication/Login'
import Signup from '../Authentication/Signup'
import IfAuthenticated from './IfAuthenticated'

const PublicRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<IfAuthenticated />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>
            </Routes>
        </>
    )
}

export default PublicRoutes