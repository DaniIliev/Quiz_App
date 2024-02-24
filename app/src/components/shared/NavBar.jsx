import React from 'react'

const NavBar = () => {
  return (
    <nav className='navBar'>
        <ul>
            <li><img src="/icons/userIcon.png" alt="userIcon" width={30} height={30} className='profile'/> Profile</li>
            <li>Logout</li>
        </ul>
    </nav>
  )
}

export default NavBar