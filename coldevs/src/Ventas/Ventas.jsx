import React,{useState} from 'react'
import "../App.css"
// import DATABASE from '../data'
import { useHistory } from 'react-router-dom'
import TablaVentas from './TablaVentas'

const Ventas = ({user, venta, setVenta}) => {
    /* const [dbVentas,setdbVentas]=useState([
        {id:123,nombre:"camisa",cantidad:5,precio:10000},
        {id:1223,nombre:"pantalo",cantidad:55,precio:160000},
        {id:1253,nombre:"jean",cantidad:65,precio:100700},
        {id:1253,nombre:"polo",cantidad:75,precio:190000}

    ]) */

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
