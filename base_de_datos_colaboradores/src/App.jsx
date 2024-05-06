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
    <div className='container_buscador_listado'>
    <h1>Lista Colaboradores</h1>
      <Buscador filtro={filtro} onFiltroChange={filtroChange} />
      <Listado colaboradores={colaboradoresFiltrados} onEliminarColaborador={eliminarColaborador} />
    </div>
      <div className='container_formulario'>
        <h2>Agregar Colaborador</h2>
      <Formulario agregarColaborador={agregarColaborador} />
      </div>
    </>
  );
}

export default App;
