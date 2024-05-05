import { BaseColaboradores } from './Components/BaseColaboradores'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Listado from './Components/Listado';
import Formulario from './Components/Formulario';
import Buscador from './Components/Buscador';

function App() {
  return (
    <>
    <Buscador/>
    <Listado/>
    <Formulario/>
    </>
  )
}

export default App
