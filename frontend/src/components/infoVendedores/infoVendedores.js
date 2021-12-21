import React from 'react';
import './infoVendedores.css';

const InfoVendedores = () => {

    return (

        <div className="container">
            <h1 className="title">Información de las solicitudes</h1>

              
            
            <form className="GIV">
                <div>
                    <label>Título:</label>
                    <input type="text" placeholder="" className="input"/>
                </div>
                <div>
                    <label>Descripción:</label>
                    <input type="text" placeholder="" className="input"/>
                </div>
                <div>
                    <label>Estado:</label>
                    <select name="Estado" className="input">
                        <option> </option>
                        <option>Pendiente</option>
                        <option>Aprobado</option>
                        <option>Cancelado</option>
                        <option>Finalizado</option>
                    </select>
                </div>
                <div className="botton">
                    <button type="submit" className="submit">GUARDAR</button>
                </div>
                <div class="botton">
                    <button type="submit" className="submit">CANCELAR</button>
                </div>
            </form>

        </div>
    );
}

export default InfoVendedores