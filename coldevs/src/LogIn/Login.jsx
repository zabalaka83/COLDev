import React, { useState } from 'react'
import '../App.css'
import './Login.css'
import { useHistory } from 'react-router-dom'
// import DATABASE from '../data'
import { GoAlert } from "react-icons/go";
import GoogleLogin from 'react-google-login';
import cookie from 'react-cookies'

const Login = ({ user, setUser }) => {

  const responseGoogle = async (response) => {
    console.log('responseGoogle', response);
    if (response.tokenId) {
      try {
       
        cookie.save('token', response.tokenId);
        console.log('token',response.tokenId);
        
        const user = await fetch('http://localhost:5000/clientegm', {
          
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: response.profileObj.name,
            email: response.profileObj.email
            
          })
        });
        { console.log("QUE PASO"); }

        const content = await user.json();
        history.push('/app/gmail');

        /* if (content.user.Roles[0].name == 'admin') {
            history.push('/admin')
            return;
        }
        history.push('/pendiente')  */

      } catch (error) {
        console.log('error', error);
      }

    }
  }



  const history = useHistory();
  const [log, setLog] = useState({
    cedula: '',
    password: '',
    res: 0,
    error: ''
  })

  const changeData = (event) => {
    //console.log(event.target.value);
    setLog({
      ...log,
      [event.target.name]: event.target.value
    })
  }

  const submitData = async (event) => {
    event.preventDefault();
    let options = {
      method: "PUT",
      headers: {
        'Accept': 'aplication/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "cedula": log.cedula,
        "pass": log.password
      })
    }
    try {
      const res = await fetch('http://localhost:5000/log', options)
      const data = await res.json()
      if (data.error !== '') {
        setLog({ ...log, res: 2, error: data.error })
      } else {
        setUser({
          ...user,
          Id_Empleado: data.empleado.id,
          nombre: data.empleado.name + ' ' + data.empleado.apellido,
          rol: data.empleado.rol_id
        })

        history.push('/app/roles')
      }

    } catch (error) {
      console.log(error);
    }
    event.target.reset();
  }

  // const submitData = (event) => {
  //   event.preventDefault();

  //   DATABASE.empleados.forEach(item => {
  //     if (item.cedula === log.cedula) {
  //       if (item.password === log.password) {
  //         setUser({
  //           ...user,
  //           Id_Empleado: item.Id_Empleado,
  //           nombre: item.nombre,
  //           rol: item.rol
  //         })
  //         history.push('/app/roles')
  //       } else setLog({ ...log, res: 2 })
  //     }
  //   })
  //   event.target.reset();
  // }

  return (
    <>
      <div className='container-fluid log shadow p-3 mb-5 border'>
        <h1 className='text-center fw-bold'>Log In</h1>
        {
          log.res === 2 ?
            <div className="alert alert-danger text-center" role="alert">
              <GoAlert />  {log.error}
            </div> : <></>
        }
        <form className='' onSubmit={submitData}>
          <div className="mb-3">
            <label className="form-label fw-bold">Cedula</label>
            <input name='cedula' type="text" className="form-control" onChange={changeData} required />
            <div className="form-text">Por favor sin puntos o comas.</div>
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Contraseña</label>
            <input name='password' type="password" className="form-control" onChange={changeData} required />
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
          <br />
          <br />

          <div className="form-text">--Registrese como cliente--</div>
          
          <div>
            <GoogleLogin
              clientId="912968040117-gktc1nnh04mb98ig13aco6hthfei668m.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
