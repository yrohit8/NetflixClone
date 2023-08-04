import React from 'react'
import logo2 from "../logo.png" 
import { Link } from 'react-router-dom'
import {ImSearch} from "react-icons/im"
const Header = () => {
  return (
    <nav className="header">
        <img src={logo2} alt="NetflixLogo" />
        <div className='link'>
            <Link to="/tvshows" > TV Shows</Link>
            <Link to="/movies" > Movies</Link>
            <Link to="/recentlyadded" > Recently Added</Link>
            <Link to="/mylist" > My List</Link>
        </div>
        <ImSearch />
    </nav>
  )
}

export default Header