import React from 'react'
import { Link } from 'react-router-dom'

const Denegado = () => {
    return (
        <div className="container" style={{marginTop: '15vh', width:'88vh'}}>
            <h1 className="text-center text-decoration-underline">Autorizacion Denegada</h1>
            <h4>Es necesario Iniciar Sesion para acceder a este sitio</h4>
            <Link to="/"><div className="btn btn-primary">Login</div></Link>
        </div>
    )
}

export default Denegado
