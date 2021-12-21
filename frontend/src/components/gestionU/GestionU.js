import React from 'react'
import './gestionU.css'

const GestionU = () => {
    return (
        <div className="container">
            

            <div className="gestion">
            <h2 id="titulo">Gestión de usuarios</h2>
                <h4 className="texto">Seleccione los datos para actualizar la información de usuario</h4>

                <div className="col-sm-12">
                    <form className="form">

                        <p>Seleccione el nuevo rol de usuario</p>
                        <input type="checkbox" id="administrador" name="administrador" value="administrador" />
                        <label for="administrador"> Administrador</label>
                        <br />
                        <input type="checkbox" id="vendedor" name="vendedor" value="vendedor" />
                        <label for="estudiante"> Estudiante</label><br />
                        <br />
                        <input type="checkbox" id="vendedor" name="vendedor" value="vendedor" />
                        <label for="lider"> Líder</label><br />
                        <br />
                        <input type="checkbox" id="vendedor" name="vendedor" value="vendedor" />
                        <label for="usuario"> Usuario</label><br />
                        <br />

                    </form>
                </div>

                <br />

                <div>
                    <form className="form">
                        <p>Seleccione el nuevo estado de usuario</p>

                        <input type="checkbox" id="autorizado" name="autorizado" value="autorizado" />
                        <label for="autorizado"> Autorizado</label><br />
                        <input type="checkbox" id="noAutorizado" name="noAutorizado" value="noAutorizado" />
                        <label for="noAutorizado"> No autorizado</label><br />
                        <input type="checkbox" id="pendiente" name="pendiente" value="pendiente" />
                        <label for="pendiente"> Pendiente</label><br />
                    </form>
                </div>
                <br />
                <button className="centerbutton" type="submit" >Actualizar</button>
            </div>
        </div>
    )


}
export default GestionU
