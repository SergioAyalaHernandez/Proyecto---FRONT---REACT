import axios from "axios";
import React, { Component } from "react";
import {Link} from "react-router-dom";

class Vehiculos extends Component{

    state = {
        car:[]
    }

    componentDidMount(){
        this.getCar();
    }

    getCar = () =>{
        axios.get("https://proyecto-back-nodejs-production.up.railway.app/api/car/listar").then(
            res => {
                console.log(res.data.doc);
                this.setState({
                    car:res.data.doc
                });
            }).catch (error =>{
                console.log(error)
            })
    }
    render(){
        return(
            //<React.Fragment></React.Fragment> <----- esto es opcional cuando no se requiere etiqueta
            <React.Fragment>
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
                                                <Link to={"agregarreserva/"+car._id+"/"+car._id}className="btn btn-light">Agregar Reserva</Link>

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

export default Vehiculos;