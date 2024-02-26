import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const NavBar = () => {

  const {logout} = useContext(AuthContext)
  return (
    <nav className='navBar'>
        <ul>
            <li><img src="/icons/user-solid.svg" alt="userIcon" width={30} height={30} className='profile'/></li>
            <li onClick={logout}><img src="/icons/logout.svg" width={30} height={30}  className='logout' alt="logout" /></li>
        </ul>
    </nav>
  )
}

export default NavBar