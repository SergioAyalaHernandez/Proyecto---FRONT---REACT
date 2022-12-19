import React, { Component } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Usuarios from "./Componentes/Usuarios";
import AgregarUsusarios from "./Componentes/AgregarUsuarios";
import Inicio from "./Componentes/Inicio";
import EditarUsuario from "./Componentes/EditarUSuario";
import Cars from "./Componentes/Cars";
import EditarVehiculo from "./Componentes/EditarVehiculo";
import GuardarUsuario from "./Componentes/GuardarUSuario";
import GuardarCarro from "./Componentes/GuardarCarro";
import AgregarReserva from "./Componentes/AgregarReserva";
import Reservas from "./Componentes/Reservas";


class Routeres extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Inicio/>} />
                    <Route path="/usuarios" element = {<Usuarios/>} />
                    <Route path="/agregarusuarios" element = {<AgregarUsusarios/>} />
                    <Route path="/usuarios/editarusuario/:id" element = {<EditarUsuario/>} />
                    <Route path="/cars/editarvehiculo/:id" element = {<EditarVehiculo/>} />
                    <Route path="/usuario/guardarusuario/" element = {<GuardarUsuario/>} />
                    <Route path="/cars" element = {<Cars/>} />
                    <Route path="/guardarcarro" element = {<GuardarCarro/>} />
                    <Route path="/agregarreserva/:id/:id" element = {<AgregarReserva/>} />
                    <Route path="/reservas/" element = {<Reservas/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Routeres;