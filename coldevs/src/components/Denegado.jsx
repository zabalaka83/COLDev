import React from 'react'
import { Link } from 'react-router-dom'

const Denegado = () => {
    return (
        <div className="container">
            <h1>Autorizacion Denegada</h1>
            <p>Es necesario Iniciar Sesion para acceder a este sitio</p>
            <Link to="/login"><div className="btn btn-primary">Login</div></Link>
        </div>
    )
}

export default Denegado
