import React, { useState, useEffect }from 'react'
import '../App.css'
import './Stock.css'
import { useHistory } from 'react-router-dom'
import { MdAddCircle } from "react-icons/md";
import Addstock from './Addstock';
import { BsFillAlarmFill } from "react-icons/bs";

import Quickproduct from './Quickproduct';
import { FiMinusCircle } from "react-icons/fi";


const Stock = ({ user }) => {

    const [products, setProducts] = useState([])

    useEffect(async () => {
        try {
            const res = await fetch('http://localhost:5000/pro/prod')
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            console.log(error);
        }
    }, [])

    const history = useHistory();// id Nombre precio cantidad

    const addProduct = () => {
        history.push('/app/addstock');
    }
    const quickProduct = () => {
        history.push('/app/quickproduct');
    }

    const nuevoProduct = () => {
        console.log('NUevo Producto')
        // history.push('/app/agregarproducto');
    }

    return (
        <>
            {
                user.Id_Empleado === 0 ?
                    history.push('/denegado') :
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
                                        <th scope="col">Operaciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((item, index) => {
                                            return(
                                                <tr key={index}>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.nombre}</td>
                                                    <td>{item.precio}</td>
                                                    <td>{item.stock}</td>

                                                    <td onClick={addProduct} className="detail" ><MdAddCircle /></td>
                                                    <td onClick={quickProduct} className="detail"><FiMinusCircle /></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        
                        <button className="btn btn-primary" onClick={nuevoProduct}>Nuevo Producto</button>
                        {/* 
                        <button className="btn btn-primary" onClick={addVenta}>Nueva Venta</button>
                        */}
                    </div>
            }
        </>
    )
}

export default Stock
