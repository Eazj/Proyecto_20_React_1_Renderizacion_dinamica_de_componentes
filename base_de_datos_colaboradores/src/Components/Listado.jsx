import Table from "react-bootstrap/Table";
import { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";

function Listado() {
  const [listaTareas, setListaTareas] = useState(BaseColaboradores);
  const eliminarTarea = (tarea) => {
    const listaFiltrada = listaTareas.filter(el => el.nombre !==
    tarea.nombre)
    setListaTareas(listaFiltrada)
    }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
  {listaTareas.map((tarea, index) => (
    <tr key={tarea.id}>
      <td className="hidden">{index}</td>
      <td>{tarea.nombre}</td>
      <td>{tarea.correo}</td>
      <td>{tarea.edad}</td>
      <td>{tarea.cargo}</td>
      <td>{tarea.telefono}</td>
      <td><button onClick={() => eliminarTarea(tarea)}> Borrar</button></td>
    </tr>
  ))}
</tbody>
    </Table>
  );
}

export default Listado;
/*<button onClick={() => eliminarTarea(tarea)}> Borrar</button> */