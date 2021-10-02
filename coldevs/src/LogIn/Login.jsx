import React, { useState } from 'react'
import '../App.css'
import './Login.css'
import { useHistory } from 'react-router-dom'
import DATABASE from '../data'
import { GoAlert } from "react-icons/go";

const Login = ({user, setUser}) => {

    const history = useHistory();
    const [ log, setLog ] = useState({
      cedula:'',
      password:'',
      res: 0
    })

    const changeData = (event) => {
      //console.log(event.target.value);
      setLog({
        ...log,
        [event.target.name]: event.target.value
    })
  }

    const submitData = (event) => {
        event.preventDefault();
        DATABASE.empleados.forEach(item => {
          if(item.cedula === log.cedula) {
            if(item.password === log.password) {
              setUser({
                ...user,
                Id_Empleado: item.Id_Empleado,
                nombre: item.nombre,
                rol: item.rol
              })
              history.push('/app/roles')
            } else setLog({...log, res: 2})
          }
        })
        event.target.reset();
    }

    return (
        <>
            {
                user.Id_Empleado !== 0 ?
                history.push('/app/roles'):
                <div className='container-fluid log shadow p-3 mb-5 border rounded'>
                    <h1 className='text-center fw-bold'>Log In</h1>
                    {
                      log.res === 2 ? 
                      <div className="alert alert-danger text-center" role="alert">
                         <GoAlert />  ¡¡ Contraseña Incorrecta !!
                      </div> : <></>
                    }
                    <form className='' onSubmit={submitData}>
                      <div className="mb-3">
                        <label className="form-label fw-bold">Cedula</label>
                        <input name='cedula' type="text" className="form-control" onChange={changeData} required />
                        <div className="form-text">Por favor sin puntos o comas.</div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold">Password</label>
                        <input name='password' type="password" className="form-control" onChange={changeData} required />
                      </div>
                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label">Check me out</label>
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            }
        </>
    )
}

export default Login
