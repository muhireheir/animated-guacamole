import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand" >SPL</Link>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to={'/'} className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to={'/add'} className="nav-link" >ADD ITEMS</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar