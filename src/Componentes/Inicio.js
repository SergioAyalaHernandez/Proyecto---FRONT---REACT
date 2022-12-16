import React, { Component } from "react";
import Vehiculos from "./Vehiculos";

class Inicio extends Component{
    render(){
        return(
            //<React.Fragment></React.Fragment> <----- esto es opcional cuando no se requiere etiqueta
            <React.Fragment>
                <div class="inicioL">
                    <h1 class="textInicio">RENT A CAR - G1</h1>
                    <div class="textInicio">
                        Acá irá el cuadro
                    </div>
                </div>

                <div class="tittle">
                    <h2 >CONOCE NUESTRA FLOTA</h2>
                </div>
                
                <Vehiculos/>
                
                

            </React.Fragment>
            );      
    }    
}

export default Inicio;