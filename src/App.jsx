import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function BasicExample() {
  const [texto, setTexto] = useState('');
  const [tasks, addTask] = useState([]);

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  const add = (event) => {
    event.preventDefault();
    if (texto.trim() !== '') {
      addTask((prevItems) => [...prevItems, texto]);
      setTexto('');
    }
  };

  const removeItem = (num) => {
    addTask((prevItems) => prevItems.filter((_, i) => i !== num));
  };

  return (
    <div className="container text-light bg-dark rounded-3 p-5 mt-5">
      <h1 className="text-center mb-3">Mini Task Dashboard</h1>
      <Form onSubmit={add}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Agregar tarea"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={texto}
            onChange={handleChange}
          />
          <Button variant="outline-success" id="button-addon2" type="submit">
            AGREGAR
          </Button>
        </InputGroup>
      </Form>

      {tasks.map((task, num) => (
        <div key={num} className="align-items-center m-3">
          <span>{task}</span>
          <Button
            className="mx-5"
            variant="danger"
            onClick={() => removeItem(num)}
          >
            Eliminar
          </Button>
        </div>
      ))}
    </div>
  );
}

export default BasicExample;
