import React from 'react'
import { Link } from 'react-router-dom'
const Gmail = () => {
    return (
        <div className="container" style={{marginTop: '15vh', width:'88vh'}}>
            <h1 className="text-center text-decoration-underline">Registro Exitoso</h1>
            <h4>Pendiente ingreso de todos los datos</h4>
            <Link to="/"><div className="btn btn-primary">Login</div></Link>
        </div>
    )
}

export default Gmail
