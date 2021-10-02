import React from 'react'
import '../App.css'
import { useHistory } from 'react-router-dom'

const Operario = ({user}) => {

    const history = useHistory();

    return (
        <>
            {
                user.Id_Empleado === 0  ?
                history.push('/denegado'):
                <div className="main">
                    <h1>Hello Operario...</h1>
                </div>
            }
        </>
    )
}

export default Operario
