import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class GuardarUsuario extends Component{
    nombre = React.createRef();
    surname = React.createRef();
    email = React.createRef();
    contraseña = React.createRef();
    rolUsuario = React.createRef();
        
    state ={
        usuario : {},
        status:null
    }

    changeState = () =>{
        this.setState({
            usuario:{
                nombre:this.nombre.current.value,
                surname:this.surname.current.value,
                email:this.email.current.value,
                pass:this.contraseña.current.value,
                rolUsuario:this.rolUsuario.current.value
            }
        })
        console.log(this.state)
    }

    guardarUsuario = (e) => {
        e.preventDefault();
        console.log(this.nombre.current.value);
        this.changeState();
        console.log(this.state.usuario);
        axios.post("http://34.16.137.107:80//api/usuario/save",this.state.usuario).then(res=>{ 
            this.setState({
                status:"success"
            })
            
        }).catch(function(error){
            console.log(error)
        })
    }

    render(){
        if(this.state.status === "success"){
            return <Navigate to="/usuarios" />
        }
        return(
            //<React.Fragment></React.Fragment> <----- esto es opcional cuando no se requiere etiqueta
            <React.Fragment>
                <div class="containerEdit">
                    <form onSubmit={this.guardarUsuario}>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" >Nombre</label>
                        <input type="text" className="form-control" id="nombre" name ="nombre" ref={this.nombre} onChange={this.changeState}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" >Apellido</label>
                        <input type="text" className="form-control" id="apellido" name ="surname" ref={this.surname} onChange={this.changeState}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" >Email</label>
                        <input type="text" className="form-control" id="email" name ="email" ref={this.email} onChange={this.changeState}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" >Contraseña</label>
                        <input type="text" className="form-control" id="contraseña" name ="contraseña" ref={this.contraseña} onChange={this.changeState}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" > Rol de usuario</label>
                        <input type="text" className="form-control" id="rolUsuario" name ="rolUsuario" ref={this.rolUsuario} onChange={this.changeState}/>
                    </div>
                    <button class="btn2 btn-primary">
                        <span>Agregar usuario</span>
                        <i class="ri-home-line icon"></i>
                    </button>
                    </form>   
                </div>

            </React.Fragment>
            );      
    }    
}

export default GuardarUsuario;