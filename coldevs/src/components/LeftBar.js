import React from 'react';
import './LeftBar.css';
import IconoAdmin from '../images/iconos/Icono_Admin.png';
import IconoProductos from '../images/iconos/Icono_Productos.png';
import IconoRoles from '../images/iconos/Icono_Roles.png';
import IconoVentas from '../images/iconos/Icono_Ventas.png';
import { Link } from 'react-router-dom'

const LeftBar = () => {

    return ( 
        <aside id="left" className="">
            <Link to='/app/roles'><img className="icon" src={IconoAdmin} alt="Admin Icon" height="9%"/></Link>
            <Link to='/app/stock'><img className="icon" src={IconoProductos} alt="Stock Icon" height="9%"/></Link>
            <Link to='/app/ventas'><img className="icon" src={IconoVentas} alt="Sell Icon" height="9%"/></Link>
            <Link to='/app/roles'><img className="icon" src={IconoRoles} alt="Rol Icon" height="8%"/></Link>
        </aside>
     );
}

export default LeftBar;