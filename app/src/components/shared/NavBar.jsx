import { useContext, useEffect, useState } from 'react'
import * as userService from '../../services/userService'
import { AuthContext } from '../../context/authContext'
import {useNavigate} from 'react-router-dom'

const NavBar = () => {
  const {logout, auth} = useContext(AuthContext)
  const [userDetails, setUserDetails] = useState([])

  const navigate = useNavigate()
  useEffect(() => {
    userService.findOneById(auth.localId)
                .then(data => setUserDetails(data))
  },[auth])
  return (
    <nav className='navBar'>
        <ul>
            <div className='profileAndProfit'>
                <li className='profile'><img src="/icons/name1.png" alt="userIcon" width={30} height={30}  onClick={() => navigate(`/profile/${auth.localId}`)}/>{userDetails[0]?.username}</li>
                <li className='profit'><img src="/icons/dollar.png" alt="" width={30} height={30} />{userDetails[0]?.profit}</li>
            </div>
            <li className='ranking'><img src="/icons/world.png" alt="" width={30} height={30} />World ranking</li>
            <li className='logout' onClick={logout}><img src="/icons/exit.png" width={60} height={60}   alt="logout"  /></li>
        </ul>
    </nav>
  )
}

export default NavBar