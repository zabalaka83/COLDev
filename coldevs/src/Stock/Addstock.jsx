import React from 'react'
import '../App.css'
import { useHistory } from 'react-router-dom'

const Addstock = ({ user }) => {

    const history = useHistory();// id Nombre precio cantidad


    return (
        <>
            {
                user.Id_Empleado === 0 ?
                    history.push('/denegado') :
                    <div className="main">
                        <div>
                            <div class="hstack gap-3">
                                <h1>Adiccionar</h1><br/>
                                <input class="form-control me-auto" type="text" placeholder="Cantidad de producto a sumar al Stock:" aria-label="Add your item here..." />            
                                <button type="button" class="btn btn-secondary">Submit</button>
                                <div class="vr"></div>
                                <button type="button" class="btn btn-outline-danger">Reset</button>
                            </div>
                           {/* 
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                            */}
                    
                        </div>
                    </div>
            }</>
    )



}

export default Addstock
