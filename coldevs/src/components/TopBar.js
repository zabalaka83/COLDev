import React from 'react';
import LogoHorizontal from '../images/iconos/LogoHorizontal.png';
import './TopBar.css';
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";

const TopBar = ({user}) => {
    return (
        <>
        {
            user.Id_Empleado !== 0 ? 
            <div id="top" className="d-flex justify-content-between">
                <img id="myImg" src={LogoHorizontal} alt="Logo" height="60%"/>
                <div>
                <div className="d-inline" id='name'>{user.nombre}</div>
                <div className="d-inline" id='salir'><Link to="" style={{color: 'white'}}><ImExit /></Link></div>
                </div>
            </div> : 
            <div id="top" className="d-flex justify-content-between">
                <img id="myImg" src={LogoHorizontal} alt="Logo" height="60%"/>
            </div>
        }
        </>
     );
}
 
export default TopBar;