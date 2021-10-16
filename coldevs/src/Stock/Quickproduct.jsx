import React from 'react'
import '../App.css'
import { useHistory } from 'react-router-dom'

const Quickproduct = ({ user }) => {

    const history = useHistory()

    return (

        <div>
            {
                user.Id_Empleado === 0 ?
                    history.push('/denegado') :
                    <div className="main">
                        <div className="hstack gap-3">

                            <h1>Restar</h1><br />
                            <input className="form-control me-auto" type="text" placeholder="Cantidad de producto a restar del Stock:" aria-label="Add your item here..." />
                            <button type="button" className="btn btn-secondary">Submit</button>
                            <div className="vr"></div>
                            <button type="button" className="btn btn-outline-danger">Reset</button>

                        </div>
                    </div>
            }
        </div>
    )
}

export default Quickproduct
