import { BaseColaboradores } from './Components/BaseColaboradores'
import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Listado from './Components/Listado';
import Formulario from './Components/Formulario';
import Buscador from './Components/Buscador';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtro, setFiltro] = useState('');

  const agregarColaborador = colaborador => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const eliminarColaborador = id => {
    const nuevosColaboradores = colaboradores.filter(colaborador => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
  };

  const filtroChange = valor => {
    setFiltro(valor);
  };

  const colaboradoresFiltrados = colaboradores.filter(colaborador =>
    Object.values(colaborador).some(valor =>
      valor.toString().toLowerCase().includes(filtro.toLowerCase())
    )
  );

  return (
    <>
      <Buscador filtro={filtro} onFiltroChange={filtroChange} />
      <Listado colaboradores={colaboradoresFiltrados} onEliminarColaborador={eliminarColaborador} />
      <Formulario agregarColaborador={agregarColaborador} />
    </>
  );
}

export default App;
