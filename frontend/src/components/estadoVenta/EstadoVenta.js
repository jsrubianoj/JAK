import React from 'react';
import './estadoVenta.css';

const EstadoVenta = () => {

    return (

            <div className="container">
                <h1 className="title">Roles Usuarios</h1>
                <form className="GIV"action="/action_page.php">
                <label for="id_venta">ID Usuario:</label>
                <input className="input" name="id_venta" type="text" placeholder="ID de la venta" />
                <label for="estado">Rol del usuario:</label>
                <select className="input" name="estado" id="estado">
                    <option value="estudiante">Estudiante</option>
                    <option value="usuario">Usuario</option>
                    <option value="lider">Líder</option>
                    <option value="administrador">Administrador</option>
                </select>
                <br></br>
                <input type="submit" value="ENVIAR" className="submit" name="enviar"/>
                <label for="enviar">Click "Enviar" para actualizar estado del usuario.</label>
                </form>
            </div>
    );
}

export default EstadoVenta