import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import icono2 from '../assets/icono2.png'

export const NavBarApp = () => {
    const NavBarStyle = {
        backgroundColor: '#EFA747',
        
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg " style={NavBarStyle}>
                <div className="container-fluid">
                    <img src={icono2} alt="Teléfono" className="rounded me-2" style={{ width: 30, height: 30 }} />
                    <NavLink className="navbar-brand" to='/'>DEPELIS</NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Proximos Estrenos</NavLink>
                        </li>
                        <li className="nav-item dropdown" >
                        <NavLink className="nav-link dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Otros
                        </NavLink>
                        <ul className="dropdown-menu" >
                            <li><NavLink className="dropdown-item text-black" style={NavBarStyle} to='/mejoresCalificadas'>Mejor Calificadas</NavLink></li>
                            <li><NavLink className="dropdown-item text-black" style={NavBarStyle} to='/cartelera'>Cartelera</NavLink></li>
                            <li><NavLink className="dropdown-item text-black" style={NavBarStyle} to='/populares'>Populares</NavLink></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
