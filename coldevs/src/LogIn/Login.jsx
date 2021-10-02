import React from 'react'
import '../App.css'
import { useHistory } from 'react-router-dom'

const Login = ({user}) => {

    const history = useHistory();

    return (
        <>
            {
                user.Id_Empleado !== 0 ?
                history.push('/app/roles'):
                <div>
                    <h1>Hello Login...</h1> 
                </div>
            }
        </>
    )
}

export default Login
