import React, { Component } from "react";

class Footer extends Component{
    render(){
        return(
          <React.Fragment>
                <footer className="bg-dark text-white py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <h5>About Us</h5>
                      <p>Rent a Car es la compañia lider en alquiler de vehiculos tipo automovil familiar, a traves de tecnología e innovación te brindamos la mejor experiencia del mercado.</p>
                    </div>
                    <div className="col-md-3">
                      <h5>Info</h5>
                      <ul className="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">PQRS</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h5>Social</h5>
                      <ul className="list-unstyled">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h5>Contact</h5>
                      <p>742 Evergreen Terrace<br/>
                      Bogotá, COL 14325</p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-12">
                      <p className="text-center">Copyright &copy; 2022 Rent a Car</p>
                    </div>
                  </div>
                </div>
              </footer>

                        
          </React.Fragment>
        );
    }
}

export default Footer;

