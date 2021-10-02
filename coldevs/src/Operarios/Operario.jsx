import React from 'react'
import '../App.css'
import { useHistory } from 'react-router-dom'
import TablaVentas from './TablaVentas'
import { FaCheckCircle } from "react-icons/fa";

const Operario = ({ user }) => {

    const history = useHistory();

    return (
        <>
            {
                user.Id_Empleado === 0 ?
                    history.push('/denegado') :
                    <div className="main">
                        <div className="detalle">
                            <div className="formulario">
                                <h1>Productos Pendientes</h1>

                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id_Producto</th>
                                        <th scope="col">Producto</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Terminado</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>

                                        <td>Camisa</td>
                                        <td>3</td>


                                        <td className="detail" style={{color: 'green'}} ><FaCheckCircle /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>

                                        <td>Jean</td>
                                        <td>5</td>


                                        <td className="detail" style={{color: 'green'}}><FaCheckCircle /></td>

                                    </tr>

                                    <tr>
                                        <th scope="row">3</th>

                                        <td>Polo</td>
                                        <td>2</td>


                                        <td className="detail" style={{color: 'green'}}><FaCheckCircle /></td>

                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
            }
        </>
    )
}

export default Operario
