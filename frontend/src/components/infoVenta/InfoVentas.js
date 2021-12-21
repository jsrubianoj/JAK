import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './InfoVentas.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const InfoVentas = () => {

    const [ventas, setVentas] = useState([])

    const eliminarVenta = (id) => {

        const requestInit = {
            method: 'DELETE',
            mode: 'cors'
        }

        fetch(`http://localhost:3001/api/ventas/eliminar/${id}/`, requestInit)
        .then(res => res.json())
        .then(res => console.log("Eliminado con Exito", res))
        .catch(error => {
            console.log('Error al eliminar la venta', error)
        })

    }

    useEffect(() => {

        const getVentas = () => {
            fetch('http://localhost:3001/api/ventas/')
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    setVentas(response)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        getVentas()

    }, [])

    return (
        <div className="container">
            <h1 className="my-5"> Registro de proyectos </h1>

            <div className="d-flex">
                <Link to="/nuevaVenta" className="bg-color btn-add py-2 px-3">
                    Agregar Proyecto <FontAwesomeIcon icon={faPlus} className="mx-1" />
                </Link>
            </div>
            <table className="table text-center border my-4">
                <thead className="bg-color">
                    <tr>
                        <th className="col-1">#</th>
                        <th className="col-1">ID Proyecto</th>
                        <th className="col-2">Título</th>
                        <th className="col-2">Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {(ventas !== undefined && ventas.length > 0) ?
                        ventas.map(venta => {
                            return (
                                <tr key={venta.id}>
                                    <th> {venta.id} </th>
                                    <td> {venta.id_cliente} </td>
                                    <td> {venta.nombre_cliente} </td>
                                    <td> {venta.codigo_producto} </td>
                                    <td> {venta.nombre_producto} </td>
                                    <td> ${venta.valor} </td>
                                    <td>
                                        <button className="btn btn-primary mx-2"> <FontAwesomeIcon icon={faEdit} /> </button>
                                        <button onClick={() => eliminarVenta(venta.id)} className="btn btn-danger mx-2"> <FontAwesomeIcon icon={faTrash} /> </button>
                                    </td>
                                </tr>
                            )
                        }) :
                        <div>
                            No hay ninguna venta registrada
                        </div>
                    }
                </tbody>
            </table>
        </div>
    );

}

export default InfoVentas;