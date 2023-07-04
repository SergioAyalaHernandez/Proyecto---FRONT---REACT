import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

class Reservas extends Component{

    state = {
        usuarios:[],
        state:null
    }

    componentWillMount() {
        this.getUsuarios();
    }

    getUsuarios = () =>{
        axios.get("http://34.125.204.221:80/api/reservation/listar").then(
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
            title: "Estas seguro de eliminar la reserva?",
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
                            <th scope="col">ID RESERVA</th>
                            <th scope="col">FECHA INICIAL</th>
                            <th scope="col">FECHA FINAL</th>
                            <th scope="col">ID USUARIO</th>
                            <th scope="col">ID VEHICULO</th>
                            <th scope="col">STATUS</th>
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
                                                <td>{usuario.startDate}</td>
                                                <td>{usuario.devolutionDate}</td>
                                                <td>{usuario.idVehiculo}</td>
                                                <td>{usuario.idUsuario}</td>
                                                <td>{usuario.status}</td>
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

export default Reservas;