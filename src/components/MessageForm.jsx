import { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,InputGroup, FormControl,} from 'react-bootstrap';

const MessageForm = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      console.log('Message to send:', message); // Registrar el mensaje antes de enviarlo
      onSendMessage(message);
      setMessage('');
    } else {
      console.error('Error: Message cannot be empty');
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">

        <FormControl
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí" // Placeholder opcional
          aria-label="Escribe tu mensaje aquí"
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" type="submit">Enviar</Button> {/* Utilizar variant para dar estilo al botón */}
      </InputGroup>
    </form>
  );
};

MessageForm.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};

export default MessageForm;
