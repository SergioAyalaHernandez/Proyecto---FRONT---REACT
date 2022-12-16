import React, { Component } from "react";
import axios from "axios";

class EditarVehiculo extends Component{
    constructor(props){
        super(props);
        this.path = window.location.pathname;
        console.log(this.path);
        this.url=this.path.split("/cars/editarvehiculo/");
        this.carId = this.url[1];
        console.log(this.carId)
        this.getCar(this.carId);
    };
    
    path = null;
    url =[];
    carId = null;
    name = React.createRef();
    brand = React.createRef();
    year = React.createRef();
    description = React.createRef();
    payDay = React.createRef();
    link = React.createRef();

    state = {
        car:[],
        status:null
    };

    getCar = (id) => {
        axios.get("http://localhost:3000/api/car/mostrar/"+id).then(res =>{
                this.setState({                    
                    car:res.data.usuario
                });
                console.log(res.data.usuario);

                
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
        console.log("acá  "+this.carId)
        console.log(car)
        axios.put("http://localhost:3000/api/car/update/"+this.carId,car).then(
            res =>{
                this.setState({
                    status:"success"
                })
            }).catch(function(error){
                console.log(error)
            })
    }
    render(){
        return(
            if(this.state.status ==="success"){
                return <Navigate to ="/usuarios" />
            }
            //<React.Fragment></React.Fragment> <----- esto es opcional cuando no se requiere etiqueta
            <React.Fragment>
                <div class="containerEdit">
                    <form onSubmit={this.actualizarUsuario}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">ID del vehiculo</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"defaultValue={this.state.car._id} ref={this.id}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre" defaultValue={this.state.car.name} ref={this.name}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Marca</label>
                        <input type="text" class="form-control" id="brand"defaultValue={this.state.car.brand} ref={this.brand}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Año del modelo</label>
                        <input type="text" class="form-control" id="year"defaultValue={this.state.car.year} ref={this.year}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Descripción</label>
                        <input type="text" class="form-control" id="description"defaultValue={this.state.car.description} ref={this.description}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">valor del día</label>
                        <input type="text" class="form-control" id="payDay"defaultValue={this.state.car.payDay} ref={this.payDay}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">link de la foto</label>
                        <input type="text" class="form-control" id="link"defaultValue={this.state.car.link} ref={this.link}/>
                    </div>
                    <button class="btn2 btn-primary">
                        <span>Actualizar</span>
                        <i class="ri-home-line icon"></i>
                    </button>
                    </form>   
                </div>

            </React.Fragment>
            );      
    }    
}

export default EditarVehiculo;