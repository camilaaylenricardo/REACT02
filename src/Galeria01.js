import React, { useState, useEffect, useCallback } from 'react';
import './Galeria.css';

// Importa las imágenes locales desde el directorio `assets`
import imagen1 from './assets/gato01.png';
import imagen2 from './assets/gato02.png';
import imagen3 from './assets/gato03.png';

const Galeria = () => {
  // Arreglo de imágenes importadas
  const imagenes = [imagen1, imagen2, imagen3]; 
  
  // Estado para almacenar el índice de la imagen actual que se está mostrando
  const [indiceActual, setIndiceActual] = useState(0);

  // Función que maneja el evento de presionar teclas
  const manejarKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowRight') {
        // Avanza a la siguiente imagen si se presiona la flecha derecha
        setIndiceActual((indiceAnterior) => (indiceAnterior + 1) % imagenes.length);
      } else if (e.key === 'ArrowLeft') {
        // Retrocede a la imagen anterior si se presiona la flecha izquierda
        setIndiceActual((indiceAnterior) => (indiceAnterior - 1 + imagenes.length) % imagenes.length);
      }
    },
    [imagenes.length] // Dependencia: asegura que la longitud del arreglo de imágenes esté actualizada
  );

  // Efecto que añade el evento de keydown al montar el componente y lo elimina al desmontar
  useEffect(() => {
    // Agrega el evento de teclado cuando se monta el componente
    window.addEventListener('keydown', manejarKeyDown);
    
    // Limpiar el efecto al desmontar el componente
    return () => window.removeEventListener('keydown', manejarKeyDown);
  }, [manejarKeyDown]); // Dependencia: se asegura de que `manejarKeyDown` esté actualizado

  return (
    <div className="galeria">
      {/* Muestra la imagen actual basada en el índice actual */}
      <img 
        src={imagenes[indiceActual]} 
        alt={`Imagen ${indiceActual + 1}`} 
        className="galeria-imagen" 
      />
    </div>
  );
};

export default Galeria;