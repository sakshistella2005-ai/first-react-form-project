import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/python">Python</Link>
            <Link to="/java">Java</Link>
            <Link to="/dotnet">DotNet</Link>
            <Link to="/register">Register</Link>
        </div>

    )
}

export default Navbar;