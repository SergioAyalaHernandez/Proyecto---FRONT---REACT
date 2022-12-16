import './App.css';
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
      <Menu/>
      </footer>
    </div>
  );
}

export default App;
