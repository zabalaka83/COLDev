import React from 'react'
import "../App.css"

import './ventas.css'
import DATABASE from '../data'
import { useHistory } from 'react-router-dom'

const Ventas = ({ user }) => {

    const histoy = useHistory();

    return (
        <>
            {
                user.Id_Empleado === 0 ?
                    histoy.push('/denegado') :
                    <div className="main">
                        <div>
                            <div className="contenedor">
                                <div className="cliente">
                                    <div className="formulario">
                                        <h1>Cliente</h1>

                                    </div>
                                    <div className='busca'>
                                        <div className="container-fluid col-md-4">
                                            <form className="d-flex">
                                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                                <button type="submit" className="btn btn-primary">Buscar</button>
                                            </form>
                                        </div>
                                    </div>
                                    <form className="row g-3">
                                        <div className="col-md-6">
                                            <label for="inputName" className="form-label">Nombre</label>
                                            <input type="text" className="form-control" id="inputNombre" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="inputApellido" className="form-label">Apellido</label>
                                            <input type="text" className="form-control" id="inputApellido" />
                                        </div>
                                        <div className="col-12">
                                            <label for="inputAddress" className="form-label">Direccion</label>
                                            <input type="text" className="form-control" id="inputAddress" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="inputEmail" className="form-label">E-Mail</label>
                                            <input type="email" className="form-control" id="inputAddress2" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="inputTel" className="form-label">Telefono</label>
                                            <input type="tel" className="form-control" id="inputTelefono" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="inputCity" className="form-label">Ciudad</label>
                                            <input type="text" className="form-control" id="inputCity" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="inputDepartamento" className="form-label">Departamento</label>
                                            <input type="text" id="inputDepartamento" className="form-control" />

                                        </div>


                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary">Guardar</button>
                                        </div>
                                    </form>

                                </div>

                                <div className="detalle">
                                    <div className="formulario">
                                        <h1>Detalle venta</h1>
                                        <div className="container col-md-4">
                                            <label for="inputFecha" className="form-label">Fecha Venta</label>
                                            <input class="form-control me-2" type="date" placeholder="Fecha" aria-label="Search" />
                                        </div>
                                    </div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id_Producto</th>
                                                <th scope="col">Producto</th>
                                                <th scope="col">Cantidad</th>
                                                <th scope="col">Precio Unitario</th>
                                                <th scope="col">Precio Total</th>
                                                <th scope="col">Modificar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>

                                                <td>Camisa</td>
                                                <td>3</td>
                                                <td>10000</td>
                                                <td>30000</td>
                                                <td><button type="submit" className="btn btn-primary">Eliminar</button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>

                                                <td>Jean</td>
                                                <td>5</td>
                                                <td>10000</td>
                                                <td>50000</td>
                                                <td><button type="submit" className="btn btn-primary">Eliminar</button></td>
                                            </tr>

                                            <tr>
                                                <th scope="row">3</th>

                                                <td>Polo</td>
                                                <td>2</td>
                                                <td>10000</td>
                                                <td>20000</td>
                                                <td><button type="submit" className="btn btn-primary">Eliminar</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Guardar</button>
                                    </div>

                                </div>


                                <div className="producto">
                                    <div className="formulario">
                                        <h1>Productos</h1>
                                    </div>
                                    <form className="row g-3">
                                        <div className="col-md-6">
                                            <label for="inputProducto" className="form-label">Producto</label>
                                            <input type="text" className="form-control" id="inputProducto" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="inputCantidad" className="form-label">Cantidad</label>
                                            <input type="number" className="form-control" id="inputCantidad" />
                                        </div>


                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary">Agregar</button>
                                        </div>
                                    </form>

                                </div>
                                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
                                    integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
                                    crossorigin="anonymous"></script>

                            </div>
                        </div>
                    </div>
            }
        </>

    )
}

export default Ventas
