import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from './Alert.jsx';

function Formulario({agregarColaborador}) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();

    if (
      nombre === "" ||
      email === "" ||
      edad === "" ||
      cargo === "" ||
      telefono === ""
    ) {
      setError(true);
      setMensaje("Todos los campos son obligatorios");
      return;
    }
    setError(false);
    setMensaje("Registro exitoso");
    const nuevoColaborador = {
      id: Date.now().toString(),
      nombre,
      email,
      edad,
      cargo,
      telefono,
    };
    agregarColaborador(nuevoColaborador);
    setNombre("");
    setEmail("");
    setEdad("");
    setCargo("");
    setTelefono("");
  };

  return (
    <Form onSubmit={enviarFormulario} className='formulario'>
        <Form.Group className="mb-3" controlId="nombre_colaborador">
        <Form.Control type="text" placeholder="Nombre del colaborador" onChange={(e) => setNombre(e.target.value)}value={nombre} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email_colaborador">
        <Form.Control type="email" placeholder="Email del colaborador" onChange={(e) => setEmail(e.target.value)}value={email}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="edad_colaborador">
        <Form.Control type="date" placeholder="Edad Colaborador" onChange={(e) => setEdad(e.target.value)}value={edad}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="cargo_colaborador">
        <Form.Control type="text" placeholder="Cargo del colaborador" onChange={(e) => setCargo(e.target.value)}value={cargo}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="telefono_colaborador">
        <Form.Control type="number" placeholder="Telefono del colaborador" onChange={(e) => setTelefono(e.target.value)}value={telefono}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar colaborador
      </Button>
      {!error && mensaje && <Alert mensaje={mensaje} tipo="success" />}
      {error && <Alert mensaje={mensaje} tipo="danger" />}
    </Form>
  );
}

export default Formulario;