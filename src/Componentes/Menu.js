import React from "react";

class Menu extends React.Component{
  
    render(){
        return(            
          <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">RENT A CAR - G1</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link active" aria-current="page" href="/usuarios">Servicios</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Usuarios
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/usuario/guardarusuario/">Agregar Usuarios</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="/usuarios">Listar Usuarios</a></li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/reservas" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Reservas
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/">Reservar</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="/">Reservas realizadas</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Vehículos
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/guardarcarro">Agregar Vehículos</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="/cars">Listado vehículos</a></li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Información
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/">Sucursales</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="/">Contacto</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="/">Nosotros</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="/cars">Listado vehículos</a></li>
                  </ul>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        );
    }

}

export default Menu;