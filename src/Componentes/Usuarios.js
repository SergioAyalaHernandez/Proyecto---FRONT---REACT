import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

class Usuarios extends Component{

    state = {
        usuarios:[],
        state:null
    }

    componentWillMount() {
        this.getUsuarios();
    }

    getUsuarios = () =>{
        axios.get("http://34.125.204.221:80/api/usuario/listar").then(
            res => {
                console.log(res.data.doc);
                this.setState({
                    usuarios:res.data.doc
                });
            }).catch (error =>{
                console.log(error)
            })
    };

    eliminarUsuario = (id) => {
        console.log(id)
        swal({
            title: "Estas seguro de eliminarlo?",
            text: "Si lo eliminas, no volveras a tener su información!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              
              axios.delete("http://34.125.204.221:80/api/usuario/delete/"+id).then(
                res => {
                    this.setState({
                        status:"deleted"
                    });
                }).catch (error =>{
                    console.log(error)
                })
                swal(window.location.reload(true));
            } else {
              swal("No se elimina el usuario!");
            }
          });
       
    }


    render(){
        return(
            //<React.Fragment></React.Fragment> <----- esto es opcional cuando no se requiere etiqueta
            <React.Fragment>

               
                <div class ="tittle">

                    <h3>Listado de usuarios</h3>     

                </div>
                <div class="tableUsuarios">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NOMBRE</th>
                            <th scope="col">APELLIDO</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">CONTRASEÑA</th>
                            <th scope="col">IMAGEN</th>
                            <th scope="col">ROL</th>
                            <th scope="col">ACCIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.usuarios.map((usuario)=>{
                                    return(
                                        <React.Fragment>
                                            <tr>
                                                <td>{usuario._id}</td>
                                                <td>{usuario.nombre}</td>
                                                <td>{usuario.surname}</td>
                                                <td>{usuario.email}</td>
                                                <td>{usuario.pass}</td>
                                                <td>{usuario.image}</td>
                                                <td>{usuario.role}</td>
                                                <td>
                                                    <Link to={"editarusuario/"+usuario._id}className="btn btn-success">Editar</Link>
                                                    <button className="btn btn-danger"
                                                        onClick={
                                                            () => {
                                                                this.eliminarUsuario(usuario._id);
                                                            }
                                                        }
                                                    >Delete</button>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            
            </React.Fragment>
            );      
    }    
}

export default Usuarios;