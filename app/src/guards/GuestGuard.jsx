import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import {Navigate, Outlet} from 'react-router-dom'

const GuestGuard = () => {

    const {isAuthenticated} = useContext(AuthContext)

    if(isAuthenticated) {
        return <Navigate to={'/catalog'}/>
    }

  return <Outlet />
}

export default GuestGuard