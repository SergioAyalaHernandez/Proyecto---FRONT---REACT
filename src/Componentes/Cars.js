import axios from "axios";
import React, { Component } from "react";
import {Link} from "react-router-dom";
import swal from "sweetalert";


class Cars extends Component{

    state = {
        car:[],
        state:null
    }

    componentDidMount(){
        this.getCar();
    }

    getCar = () =>{
        axios.get("http://localhost:3000/api/car/listar").then(res => {
                console.log(res.data.doc);
                this.setState({
                    car:res.data.doc
                });
            }).catch (error =>{
                console.log(error)
            })
    }
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
                axios.delete("http://localhost:3000/api/car/delete/"+id).then(
            res => {
                this.setState({
                    status:"deleted"
                });

                window.location.reload(true);

              swal(window.location.reload(true));
              
            }).catch (error =>{
                console.log(error)
            })
            } else {
              swal("No se elimina el vehículo!");
            }
          });
        
    }
    render(){
        return(
            //<React.Fragment></React.Fragment> <----- esto es opcional cuando no se requiere etiqueta
            <React.Fragment>

               
                <div class ="tittle">

                    <h3>Listado de vehículos</h3>     

                </div>
                <div class="tableUsuarios">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NOMBRE</th>
                            <th scope="col">MARCA</th>
                            <th scope="col">MODELO</th>
                            <th scope="col">DESCRIPCIÓN</th>
                            <th scope="col">COSTO DÍA</th>
                            <th scope="col">LINK</th>
                            <th scope="col">ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.car.map((car)=>{
                                    return(
                                        <React.Fragment>
                                            <tr>
                                                <td>{car._id}</td>
                                                <td>{car.name}</td>
                                                <td>{car.brand}</td>
                                                <td>{car.year}</td>
                                                <td>{car.description}</td>
                                                <td>{car.payDay}</td>
                                                <td>{car.link}</td>
                                                <td>
                                                    <Link to={"editarvehiculo/"+car._id }className="btn btn-success">Editar</Link>
                                                    <button className="btn btn-danger"
                                                        onClick={
                                                            () => {
                                                                this.eliminarUsuario(car._id);
                                                            }
                                                        }
                                                    >Eliminar</button>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div class="row row-cols-3 row-cols-md-3 g-3">
                    {
                        this.state.car.map((car)=>{
                            
                            return(
                                
                                <React.Fragment>
                                    <div class="flip-card">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">
                                                <img src={car.link} class="card-img-top" alt="..."/>
                                                <h4>{car.brand}</h4>
                                                <h5>{car.name}</h5>
                                                <h6>{car.description}</h6>
                                            </div>
                                            <div class="flip-card-back">
                                                <img src={car.link} class="card-img-top" alt="..."/>
                                                <h3>Desde</h3>
                                                <h1>${car.payDay/1000}/ Día</h1>
                                                <Link to={"reservas/"}className="btn btn-light">Reservar</Link>

                                            </div>
                                        </div>
                                    </div> 
                                </React.Fragment>
                            )
                        })
                    }
                       
                </div>
            </React.Fragment>
            );      
    }    
}

export default Cars;