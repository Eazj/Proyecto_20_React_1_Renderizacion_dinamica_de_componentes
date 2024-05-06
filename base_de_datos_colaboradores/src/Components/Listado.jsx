import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

function Listado({ colaboradores, onEliminarColaborador }) {
  return (
    <Table striped bordered hover className="tabla">
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
        {colaboradores.map(tarea => (
          <tr key={tarea.id}>
            <td>{tarea.nombre}</td>
            <td>{tarea.correo}</td>
            <td>{tarea.edad}</td>
            <td>{tarea.cargo}</td>
            <td>{tarea.telefono}</td>
            <td>
              <Button
                variant="danger"
                onClick={() => onEliminarColaborador(tarea.id)}
              >
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Listado;

/*<button onClick={() => eliminarTarea(tarea)}> Borrar</button> */