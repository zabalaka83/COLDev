import React from 'react'
import '../App.css'
import './Login.css'
import { useHistory } from 'react-router-dom'

const Login = ({user}) => {

    const history = useHistory();

    return (
        <>
            {
                user.Id_Empleado !== 0 ?
                history.push('/app/roles'):
                <div className='container-fluid log shadow p-3 mb-5 border rounded'>
                    <h1 className='text-center fw-bold'>Log In</h1>
                    <form className=''>
                      <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                      </div>
                      <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                      </div>
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            }
        </>
    )
}

export default Login
