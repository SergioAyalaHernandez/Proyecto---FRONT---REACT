import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

class EditarUsuario extends Component{

    constructor(props){
        super(props);
        this.path = window.location.pathname;
        console.log(this.path);
        this.url=this.path.split("/usuarios/editarusuario/");
        this.usuarioId = this.url[1];
        this.getUsuario(this.usuarioId);
    };
    
    path = null;
    url =[];
    usuarioId = null;
    nombre = React.createRef();
    surname = React.createRef();
    mail = React.createRef();
    pass = React.createRef();
    id = React.createRef();
    role = React.createRef();

    state = {
        usuario:[],
        status:null
    };

    getUsuario = (id) => {
        axios.get("https://proyecto-back-nodejs-production.up.railway.app/api/usuario/mostrar/"+id).then(res =>{
                this.setState({                    
                    usuario:res.data.usuario
                });
                console.log(res.data.usuario);

                
            })
    };
    actualizarUsuario = (e) =>{
        e.preventDefault();
        var usuario = {
            nombre:this.nombre.current.value,
            surname:this.surname.current.value,
            email:this.mail.current.value,
            pass:this.pass.current.value,

        }
        console.log(this.usuarioId)
        console.log(usuario)
        axios.put("http://34.125.204.221:80/api/usuario/update/"+this.usuarioId,usuario).then(
            res =>{
                this.setState({
                    status:"success"
                })
            }).catch(function(error){
                console.log(error)
            })
    }

    render(){
        if(this.state.status ==="success"){
            return <Navigate to ="/usuarios" />
        }
        return(
            
            //<React.Fragment></React.Fragment> <----- esto es opcional cuando no se requiere etiqueta
            <React.Fragment>
                <div className="containerEdit">
                    <form onSubmit={this.actualizarUsuario}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">ID del cliente</label>
                        <input type="text" className="form-control" id="id" defaultValue={this.state.usuario._id} ref={this.id}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre"defaultValue={this.state.usuario.nombre} ref={this.nombre}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="3"defaultValue={this.state.usuario.surname} ref={this.surname}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="4"defaultValue={this.state.usuario.email} ref={this.mail} aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="text" className="form-control" id="5"defaultValue={this.state.usuario.pass} ref={this.pass}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Rol de usuario</label>
                        <input type="text" className="form-control" id="6"defaultValue={this.state.usuario.role} ref={this.role}/>
                    </div>
                    <button className="btn2 btn-primary">
                        <span>Actualizar</span>
                        <i className="ri-home-line icon"></i>
                    </button>
                    </form>   
                </div>

            </React.Fragment>
            );      
    }    
}

export default EditarUsuario;