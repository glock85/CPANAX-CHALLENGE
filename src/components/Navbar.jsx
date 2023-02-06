import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">CPANAX</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/first-challenge">Desafío 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/second-challenge">Desafío 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="https://cool-liger-3ada1d.netlify.app/">Desafío 3</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="#">Desafío 4</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
