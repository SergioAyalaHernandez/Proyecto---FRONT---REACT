import './App.css';
import Footer from './Componentes/Footer';
import Menu from './Componentes/Menu';
import Rutas from './Rutas'

function App() {
  return (
    <div className="App">
      <header className="">
        <Menu/>
      </header>
      <body>
        <div class="fondoGrande">
          <Rutas/> 
        </div>
        
      </body>
      <footer>
      <div class="footer">
      <Footer/>
      </div>
      </footer>
    </div>
  );
}

export default App;
