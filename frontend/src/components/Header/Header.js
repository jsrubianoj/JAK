import React from 'react'
import './header.css'

const header = () => {

    const toggle=()=>{
        document.querySelectorall("a").classList.add("active");
    }

    return (
        <div>
            <div class="header">
            <a href="/" className="logo">JAK</a>
            <div className="header-right">
                <a href="/">Inicio</a>
                <a id="info" onClick={toggle} href="/infoproductos">Información Usuarios</a>
                <a id="info" onClick={toggle} href="/infoventas">Información Proyectos</a>
                <a href="/nuevaventa">Nuevo Usuario</a>
                <a href="/estadoventa">Estado de Usuarios</a>
                <a href="/infovendedores">Información solicitudes</a>
                <a href="/gestionusuarios">Gestión de usuarios</a>
            </div>
            </div>
        </div>
    )
}

export default header

