import React from 'react'
import './TablaVentas.css'
import { ImZoomIn } from "react-icons/im";
import DATABASE from '../data'
import { useHistory } from 'react-router-dom'

const TablaVentas = ({venta, setVenta}) => {

    const listaVentas = DATABASE.ventas;

    const history = useHistory();

    const goDetails = (event) => {
      // console.log(event.target.value);
      history.push('/app/ventas/detalles')
    }

    return (
        <div className="detalle">
            <div className="formulario">
                <h1>Ventas</h1>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id_Venta</th>
                  <th scope="col">Nombre Empleado</th>
                  <th scope="col">Nombre Cliente</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                {
                  listaVentas.map( (item, index) => {
                    return (
                      // Hacer un componente  fila para mantener la informacion
                      <tr key={index}>
                        <th >{item.Id_Venta}</th>
                        <td>{item.Empleado}</td>
                        <td>{item.Cliente}</td>
                        <td>{item.Total}</td>
                        <td>{item.Estado}</td>
                        <td className="detail" onClick={goDetails}><ImZoomIn /></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
        </div>
    )
}

export default TablaVentas
