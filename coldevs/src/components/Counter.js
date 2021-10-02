import React, { useState, Fragment } from 'react';

const Counter = () => {
    const [numero, setNumero] = useState(0)

    const addCounter = () => {
        setNumero(numero+1)
    }
    return (
        <div>
            <h3>Mi primer Componente</h3>
            <p>Contador: {numero}</p>
            <button className="btn btn-primary" onClick={addCounter}>Aumentar</button>
        </div>
    );
}
 
export default Counter;