import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import {useNavigate,Navigate, Outlet} from 'react-router-dom'

const AuthGuard = () => {

    const {isAuthenticated} = useContext(AuthContext)

    if(!isAuthenticated){
        return <Navigate to={'/login'}/>
    }
  return <Outlet/>
}

export default AuthGuard