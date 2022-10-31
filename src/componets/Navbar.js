import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/addnew">ADD PRODUCT</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar