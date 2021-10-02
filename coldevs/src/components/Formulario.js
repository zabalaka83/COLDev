import React, { useState } from 'react';
import '../App.css'

const Formulario = () => {

    const [datos, setDatos] = useState({
        cedula:'',
        password:''
    });

    const changeData = (event) => {
        //console.log(event.target.value);
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const submitData = (event) => {
        event.preventDefault();
    }

    return ( 
        <div className="main">
            <h1>Formulario</h1>
            <form className="" onSubmit={submitData}>
                <div className="">
                    <input 
                        placeholder="Ingrese su cedula"
                        className="form-control"
                        type="number"
                        name="cedula"
                        onChange={changeData}/>
                </div>
                <div className="">
                    <input 
                        placeholder="Ingrese su contraseña"
                        className="form-control"
                        type="text"
                        name="password"
                        onChange={changeData}/>
                </div>
                <div className="">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
        </div>
     );
}
 
export default Formulario;