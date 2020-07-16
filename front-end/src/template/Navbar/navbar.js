import React, {Component} from 'react'
import './navbar.css'

import { Link } from 'react-router-dom'

class Navbar extends Component{
    render() {
        return(
            <nav className="navbar navbar-expand-md navbar-dark fixed-top navbar-custom">

                <a className="navbar-brand" href="/">Techno</a>

                <div className="collapse navbar-collapse" id="navbarMainToggler">

                <div className="navbar-nav">
                    <Link to='/' className="nav-item nav-link" >Início</Link>
                    <Link to='/servicing'className="nav-item nav-link">Serviços</Link>
                    <Link to='/about' className="nav-item nav-link">Sobre</Link>
                    <Link to='/contacts' className="nav-item nav-link">Contatos</Link>
                </div>

                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
                        aria-controls="navbarMainToggler"  aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        )
    }
}

export default Navbar