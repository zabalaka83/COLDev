import React from 'react'
import Ventas from '../Ventas'


const Venta = ({total}) => {
    return (
        <div>
            <h1>
                {total.nombre}
            </h1>
            <p>
                {total.precio}
            </p>
        </div>
    )
}

export default Venta

