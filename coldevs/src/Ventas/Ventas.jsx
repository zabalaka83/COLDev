import React,{useState} from 'react'
import "../App.css"
// import DATABASE from '../data'
import { useHistory } from 'react-router-dom'
import TablaVentas from './TablaVentas'

const Ventas = ({user, venta, setVenta}) => {

    const history = useHistory();

    const addVenta = () => {
        history.push('/app/ventas/detalles')
    }

    return (
        <>
            {
                // hacer comprobacion de roles
                user.Id_Empleado === 0 ?
                   history.push('/denegado') :
                    <div className="main">
                        <TablaVentas venta={venta} setVenta={setVenta}/>
                        <button className="btn btn-primary" onClick={addVenta}>Nueva Venta</button>
                    </div>
            }
        </>

    )
}

export default Ventas
