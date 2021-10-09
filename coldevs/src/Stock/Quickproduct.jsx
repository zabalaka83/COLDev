import React from 'react'
import '../App.css'
import { useHistory } from 'react-router-dom'

const Quickproduct = ({ user }) => {
    return (

        <div>
            <div class="hstack gap-3">
              
                <h1>Restar</h1><br />
                <input class="form-control me-auto" type="text" placeholder="Cantidad de producto a restar del Stock:" aria-label="Add your item here..." />
                <button type="button" class="btn btn-secondary">Submit</button>
                <div class="vr"></div>
                <button type="button" class="btn btn-outline-danger">Reset</button>

            </div>
        </div>
    )
}

export default Quickproduct
