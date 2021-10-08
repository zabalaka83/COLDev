import React from 'react'
import '../App.css'
import './Stock.css'
import { useHistory } from 'react-router-dom'
import { MdAddCircle } from "react-icons/md";
import Addstock from './Addstock';
import { BsFillAlarmFill } from "react-icons/bs";


const Stock = ({user}) => {
    

    const history = useHistory();// id Nombre precio cantidad

    const addProduct = () =>{
        history.push('/app/addstock');
    }

    return (
        <>
            {
                user.Id_Empleado === 0  ?
                history.push('/denegado'):
                <div className="main">
                   <div className="detalle">
                                <div className="formulario">
                                    <h3>Productos En Stock</h3>                                                                 
                
                                </div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id_Producto</th>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Precio Unitario</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Adicionar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                
                                            <td>Camisa</td>
                                            <td>10000</td>
                                            <td>3</td>

                                            
                                            <td onClick={addProduct}  className="detail" ><MdAddCircle/></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                
                                            <td>Jean</td>
                                            <td>10000</td>
                                            <td>5</td>

                                           
                                            <td className="detail" ><MdAddCircle /></td>

                                        </tr>
                
                                        <tr>
                                            <th scope="row">3</th>
                
                                            <td>Polo</td>
                                            <td>10000</td>
                                            <td>2</td>

                                           
                                            <td className="detail" ><MdAddCircle /></td>

                                        </tr>
                                    </tbody>
                                </table>
                
                            </div>
                </div>
            }
        </>
    )
}

export default Stock
