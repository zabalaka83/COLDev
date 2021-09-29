import React from 'react';
import './LeftBar.css';
import IconoAdmin from '../images/iconos/Icono_Admin.png';
import IconoProductos from '../images/iconos/Icono_Productos.png';
import IconoRoles from '../images/iconos/Icono_Roles.png';
import IconoVentas from '../images/iconos/Icono_Ventas.png';

const LeftBar = () => {

    return ( 
        <aside id="left" className="">
            <img className="icon" src={IconoAdmin} alt="Admin Icon" height="9%"/>
            <img className="icon" src={IconoProductos} alt="Admin Icon" height="9%"/>
            <img className="icon" src={IconoVentas} alt="Admin Icon" height="9%"/>
            <img className="icon" src={IconoRoles} alt="Admin Icon" height="8%"/>
        </aside>
     );
}

export default LeftBar;