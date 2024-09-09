import React, { useState, useEffect } from 'react';
import './Notas.css';

const Notas = () => {
  // Estado para almacenar la nota escrita por el usuario.
  const [nota, setNota] = useState('');
  
  // Estado para manejar el estado de guardado de la nota.
  const [estado, setEstado] = useState('');

  // useEffect para manejar el guardado automático de la nota.
  useEffect(() => {
    // Configuramos un temporizador de 2 segundos para actualizar el estado a "Guardado automáticamente".
    const temporizador = setTimeout(() => {
      setEstado('Guardado automáticamente');
    }, 2000);

    // Limpiamos el temporizador cuando el componente se desmonta o cuando cambia la nota.
    return () => clearTimeout(temporizador);
  }, [nota]); // El efecto depende de la variable "nota", lo que significa que se activará cada vez que "nota" cambie.

  return (
    <div className="notas">
      {/* Textarea para que el usuario escriba su nota */}
      <textarea
        value={nota} // Valor del textarea es el estado "nota".
        onChange={(e) => {
          // Actualizamos la nota con el nuevo valor ingresado.
          setNota(e.target.value);
          // Actualizamos el estado de guardado a "Escribiendo..." mientras el usuario está escribiendo.
          setEstado('Escribiendo...');
        }}
        placeholder="Escribe tu nota aquí..." // Placeholder del textarea.
      ></textarea>
      
      {/* Mostrar el estado actual del guardado de la nota */}
      <p>{estado}</p>
    </div>
  );
};

export default Notas;