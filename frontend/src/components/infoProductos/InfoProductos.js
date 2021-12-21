import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './InfoProductos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const InfoProductos = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {

        const getProductos = () => {
            fetch('http://localhost:3001/api/productos/')
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    setProductos(response)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        getProductos()

    }, [])

    return (
        <div className="container">
            <h1 className="my-5"> Registro de usuarios </h1>

            <div className="d-flex">
                <Link to="/nuevaVenta" className="bg-color btn-add py-2 px-3">
                    Agregar Usuario <FontAwesomeIcon icon={faPlus} className="mx-1" />
                </Link>
            </div>
            <table className="table text-center border my-4">
                <thead className="bg-color">
                    <tr>
                        <th className="col-1">#</th>
                        <th className="col-2">Nombre</th>
                        <th className="col-3">Apellido</th>
                        <th className="col-2">Rol</th>
                        <th className="col-2">e-mail</th>
                        <th className="col-2">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {(productos !== undefined && productos.length > 0) ?
                        productos.map(producto => {
                            return (
                                <tr key={producto.id}>
                                    <th> {producto.id} </th>
                                    <td> {producto.codigo} </td>
                                    <td> {producto.nombre} </td>
                                    <td> {producto.precio} </td>
                                    <td> ${producto.precio} </td>
                                    <td>
                                        <button className="btn btn-primary mx-2"> <FontAwesomeIcon icon={faEdit} /> </button>
                                        <button className="btn btn-danger mx-2"> <FontAwesomeIcon icon={faTrash} /> </button>
                                    </td>
                                </tr>
                            )
                        }) :
                        <div>
                            Ningun producto coincide con la busqueda
                        </div>
                    }
                </tbody>
            </table>
        </div>
    );

}

export default InfoProductos;