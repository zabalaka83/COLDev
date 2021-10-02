import React from 'react';
import './LeftBar.css';
import { Link } from 'react-router-dom'
import { ImStatsDots, ImUsers } from "react-icons/im";
import { FaBoxes, FaTools, FaUsers } from "react-icons/fa";

const LeftBar = () => {

    return (
        <aside id="left" className="">

            <Link to='/app/roles'><FaTools className="icon" style={{ color: 'white' }} /></Link>

            <Link to='/app/stock'><FaBoxes className="icon" style={{ color: 'white' }} /></Link>

            <Link to='/app/ventas'><ImStatsDots className="icon" style={{ color: 'white' }} /></Link>

            <Link to='/app/roles'><FaUsers className="icon" style={{ color: 'white' }} /></Link>

        </aside>
    );
}

export default LeftBar;