import React, { useState } from 'react';
import './Juego.css';

const AdivinaNumero = () => {
  // Generamos un número aleatorio entre 1 y 100 al iniciar el componente
  const [numeroAleatorio] = useState(Math.floor(Math.random() * 100) + 1);
  
  // Estado para almacenar el intento del usuario
  const [intento, setIntento] = useState('');
  
  // Estado para almacenar el mensaje de retroalimentación al usuario
  const [mensaje, setMensaje] = useState('');

  // Manejador para el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault(); // Prevenimos el comportamiento predeterminado del formulario (recargar la página)
    
    // Convertimos el intento del usuario de string a número entero
    const intentoUsuario = parseInt(intento, 10);
    
    // Comparamos el intento del usuario con el número aleatorio
    if (intentoUsuario === numeroAleatorio) {
      setMensaje('¡Correcto! Has adivinado el número.'); // Adivinó correctamente
    } else if (intentoUsuario > numeroAleatorio) {
      setMensaje('Más bajo'); // El intento es mayor que el número aleatorio
    } else {
      setMensaje('Más alto'); // El intento es menor que el número aleatorio
    }
  };

  return (
    <div className="adivina-numero">
      {/* Formulario para que el usuario ingrese su intento */}
      <form onSubmit={manejarEnvio}>
        {/* Input para ingresar el número */}
        <input 
          type="number" 
          value={intento} 
          onChange={(e) => setIntento(e.target.value)} 
          placeholder="Adivina el número" 
        />
        {/* Botón para enviar el formulario */}
        <button type="submit">Enviar</button>
      </form>
      
      {/* Muestra el mensaje de retroalimentación */}
      <p>{mensaje}</p>
    </div>
  );
};

export default AdivinaNumero;
