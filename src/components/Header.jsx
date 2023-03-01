import React from 'react'
import { Link } from 'react-router-dom'
import headerSVG from '../images/header.svg'

const Header = () => {
  return (
    <header>
        <div>
            <Link to="/">
                <img src={headerSVG} alt="header"></img>
            </Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/user/register">Register</Link>
                </li>
                <li>
                    <Link to="/user/login">Login</Link>
                </li>
                <li>
                    <Link to="/user/create">Create Item</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header