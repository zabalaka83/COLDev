import React from 'react'
import '../App.css'
import DATABASE from '../data'
import { useHistory } from 'react-router-dom'

const Ventas = ({user}) => {

    const histoy = useHistory();

    return (
        <>
            {
                user.Id_Empleado === 0  ?
                    histoy.push('/denegado'):
                    <div className="main">
                        <h1>Hello Ventas...</h1>
                    </div>
            }
        </>
        
    )
}

export default Ventas
