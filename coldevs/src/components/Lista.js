import React, { useState, Fragment } from 'react';

const Lista = () => {

    const [arrayNum, setArryNum] = useState([1]);
    const [num, setNum] = useState(2);

    const addList = () => {
        setArryNum([...arrayNum, num]);
        setNum(num+1)
    }

    return ( 
        <Fragment>
            <h2>Mi Lista es: </h2>
            <button onClick={addList}>Agregar</button>
            {
                arrayNum.map((item, index) => 
                                <p key={index}>{index} : {item}</p>
                            )
            }
        </Fragment>
     );
}
 
export default Lista;