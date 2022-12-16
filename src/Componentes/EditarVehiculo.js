import React, { Component } from "react";

class EditarVehiculo extends Component{
    render(){
        return(
            //<React.Fragment></React.Fragment> <----- esto es opcional cuando no se requiere etiqueta
            <React.Fragment>
                <div class="containerEdit">
                    <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">ID del vehiculo</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Nombre</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Marca</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Año del modelo</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Descripción</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">valor del día</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">link de la foto</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
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