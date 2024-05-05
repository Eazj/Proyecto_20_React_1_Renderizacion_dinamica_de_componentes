import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {BaseColaboradores} from './BaseColaboradores'
import { useState } from 'react';

function Buscador() {
  const [nombreTarea, setNombreTarea] = useState("");
  const capturaInput = (e) => {
    setNombreTarea(e.target.value);
  };
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Busca un colaborador"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={capturaInput}
        />
      </InputGroup>
    </>
  );
}

export default Buscador;