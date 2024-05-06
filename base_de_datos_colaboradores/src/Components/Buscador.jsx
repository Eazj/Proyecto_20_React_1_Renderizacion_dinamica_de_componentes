import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Buscador({ filtro, onFiltroChange }) {
  return (
    <>
      <InputGroup className="mb-3" className='buscador'>
        <Form.Control
          placeholder="Busca un colaborador"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className='input_buscador'
          value={filtro}
          onChange={e => onFiltroChange(e.target.value)}
        />
      </InputGroup>
    </>
  );
}

export default Buscador;