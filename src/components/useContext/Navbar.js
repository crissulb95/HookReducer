import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <Link className="navbar-brand" to="/">Aplicación</Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink activeClassName='active' className="nav-item nav-link" exact to='/'> Home </NavLink>
                <NavLink activeClassName='active' className="nav-item nav-link" exact to='/about'> About </NavLink>
                <NavLink activeClassName='active' className="nav-item nav-link" exact to='/login'> Login </NavLink>
                </div>
            </div>

        </nav>
    )
}
