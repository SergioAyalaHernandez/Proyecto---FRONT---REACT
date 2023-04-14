import React, { Component } from "react";
import axios from "axios";


class AgregarReserva extends Component{

    

    constructor(props){
        super(props);
        this.path = window.location.pathname;
        this.url=this.path.split("/");
        this.carId = this.url[2];
        this.getCar(this.carId);
    };
    
    user = [];
    path = null;
    url =[];
    carId = null;
    usuarioId = null;
    name = React.createRef();
    brand = React.createRef();
    year = React.createRef();
    description = React.createRef();
    payDay = React.createRef();
    link = React.createRef();

    state = {
        car:[],
        car2:[],
        user:[],
        status:null
       };

    getCar = (id) => {
        axios.get("https://proyecto-back-nodejs-production.up.railway.app/api/car/mostrar/"+id).then(res =>{
                this.setState({                    
                    car:res.data.usuario,
                    car2:res.data.usuario
                });
               
            })
    };

    

    actualizarUsuario = (e) =>{
        e.preventDefault();
        var car = {
            name:this.name.current.value,
            brand:this.brand.current.value,
            year:this.year.current.value,
            description:this.description.current.value,
            payDay:this.payDay.current.value,
            link:this.link.current.value

        }

        axios.put("https://proyecto-back-nodejs-production.up.railway.app/api/car/update/"+this.carId,car).then(
            res =>{
                this.setState({
                    status:"success"
                })
            }).catch(function(error){
                console.log(error)
            });
            
    }
    actualizarUsuario2 = () =>{

        this.setState({
            car2:{
                name:this.name.current.value,
                brand:this.brand.current.value,
                year:this.year.current.value,
                description:this.description.current.value,
                payDay:this.payDay.current.value,
                link:this.link.current.value
    
            }
        })
    }

    render(){
        return(
            //<React.Fragment></React.Fragment> <----- esto es opcional cuando no se requiere etiqueta
            <React.Fragment>
                <div class="menuReserva">
                    <div class="menuRes">
                        <div class="cajals">
                            <div class="a">
                                <img src={this.state.car2.link} class="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div class="cajals">
                            <h5>NOMBRE:</h5>
                            <h6>{this.state.car2.name}</h6>
                            <h5>MARCA:</h5>
                            <h6>{this.state.car2.brand}</h6>
                        </div>
                        <div class="cajals">
                            <h5>PRECIO DÍA:</h5>
                            <h6>{this.state.car2.payDay}</h6>
                            <h5>Descripción:</h5>
                            <h6>{this.state.car2.description}</h6>
                        </div>
                        <div class="cajals">
                            <h5>Cantidad de días</h5>
                        </div>
                        <div class="cajals"><h1>En desarrollo</h1></div>
                        <div class="cajals"><h1>En desarrollo</h1></div>
                        <div class="cajals"><h1>En desarrollo</h1></div>
                        <div class="cajals"><h1>En desarrollo</h1></div>
                        

                    </div>
                </div>
            </React.Fragment>
            
            );      
    }    
}

export default AgregarReserva;