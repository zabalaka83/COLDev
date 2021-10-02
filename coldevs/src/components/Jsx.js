import React from 'react';

const Jsx = () => {

    const temp = 21;

    return ( 
        <div>
            <h2>Frio o calor?</h2>
            <h4>{
                    temp > 20 ? 'Hace Calor' : 'Hace Frio'
                }
            </h4>
        </div>
     );
}
 
export default Jsx;