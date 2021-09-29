import React , { useState } from 'react';
import LogoHorizontal from '../images/iconos/LogoHorizontal.png';
import './TopBar.css';

const TopBar = () => {
    return (
        <div id="top" className="d-flex">
            <img id="myImg" src={LogoHorizontal} alt="Logo" height="60%"/>
        </div>
     );
}
 
export default TopBar;