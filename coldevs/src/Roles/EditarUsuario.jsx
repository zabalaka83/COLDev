import React from 'react'
import '../App.css'

import { useHistory } from 'react-router-dom'

const EditarUsuario = ({ user }) => {

    const history = useHistory();

    return (
        <>
            {
                user.Id_Empleado === 0 ?
                    history.push('/denegado') :
                    <div className="main">
                        <article className="contenido">
                            <form id="user-form">
                                <div className="card container float-left">
                                    <div className="card-header">Editar Usuario</div>

                                    <div className="col-md-12">
                                        <div className="form-row col-md-4 float-left">
                                            <div className="form-group">
                                                <label >Nombre</label>
                                                <input type="text" className=" form-control" placeholder="Weimer" />
                                            </div>
                                        </div>
                                        <div className="form-row col-md-4 float-left">
                                            <div className="form-group">
                                                <label >Apellido</label>
                                                <input type="text" className=" form-control" placeholder="Cuartas Molina" />
                                            </div>
                                        </div>
                                        <div className="form-row col-md-4 float-left">
                                            <div className="form-group">
                                                <label>Numero de ID</label>
                                                <input type="text" className=" form-control" placeholder="123456" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-row col-md-4 float-left">
                                            <div className="form-group">
                                                <label>Dirección</label>
                                                <input type="text" className=" form-control" placeholder="Fake street 123" />
                                            </div>
                                        </div>
                                        <div className="form-row col-md-4 float-left">
                                            <div className="form-group">
                                                <label>Teléfono</label>
                                                <input type="text" className=" form-control" placeholder="312 000 0000" />
                                            </div>
                                        </div>
                                        <div className="form-row col-md-4 float-left">
                                            <div className="form-group">
                                                <label>Correo</label>
                                                <input type="text" className=" form-control" placeholder="usuario@walla.com" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group col-md-4 float-left">
                                            <label>Role</label>
                                            <select id="input-role" className="form-control">
                                                <option>Administrador</option>
                                                <option>Gerente</option>
                                                <option>Vendedor</option>
                                                <option>Operario</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 float-left" id="send-button">
                                            <a href="#" className="btn btn-primary">Guardar cambios</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 d-flex" id="delete-user">
                                    <a href="#" className="btn btn-danger btn-lg btn-block">Eliminar Usuario</a>
                                </div>
                            </form>

                        </article>
                    </div >
            }
        </>
    )
}

export default EditarUsuario
