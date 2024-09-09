import React, { useState } from 'react';
import './Botones.css';

const Botones = () => {
  // Estados para manejar diferentes propiedades de los botones y la vista
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Color de fondo del contenedor
  const [size, setSize] = useState(1); // Tamaño del botón (escala)
  const [rotacion, setRotacion] = useState(0); // Rotación del botón
  const [colorTexto, setColorTexto] = useState('#000'); // Color del texto
  const [tamañoTexto, setTamañoTexto] = useState(16); // Tamaño del texto
  const [borde, setBorde] = useState(false); // Estado del borde (si está activado o no)
  const [colorBotones, setColorBotones] = useState('#ffffff'); // Color del texto de los botones

  // Definimos las acciones que realizarán los botones
  const acciones = [
    () => setBackgroundColor('#FFDDC1'), // Cambiar color de fondo a un color claro
    () => setBackgroundColor('#C1FFD7'), // Cambiar a otro color de fondo claro
    () => setColorTexto(colorTexto === '#000' ? '#FF6347' : '#000'), // Cambiar color de texto entre negro y rojo
    () => setTamañoTexto(tamañoTexto === 16 ? 24 : 16), // Cambiar tamaño de texto entre 16px y 24px
    () => setColorBotones(colorBotones === '#ffffff' ? '#000000' : '#ffffff'), // Cambiar color de texto de los botones entre blanco y negro
    () => alert('¡Alerta! Botón 6 presionado!'), // Mostrar una alerta al presionar el botón
    () => setBorde(!borde), // Alternar el borde del contenedor
    () => setSize(size + 0.1), // Aumentar el tamaño del botón
    () => { // Reiniciar todas las propiedades de los botones a sus valores iniciales
      setBackgroundColor('#ffffff');
      setSize(1);
      setRotacion(0);
      setColorTexto('#000');
      setTamañoTexto(16);
      setBorde(false);
      setColorBotones('#ffffff');
    },
    () => setRotacion(rotacion + 45), // Aumentar la rotación del botón en 45 grados
  ];

  return (
    <div
      className={`contenedor-botones ${borde ? 'con-borde' : ''}`} // Clase condicional para borde
      style={{ backgroundColor }} // Estilo de fondo dinámico basado en el estado
    >
      <h1 className="titulo">Interactúa con los botones</h1>
      <div className="botones-container">
        {acciones.map((accion, index) => (
          <button
            key={index}
            className="boton"
            onClick={accion} // Asigna la función de acción a cada botón
            onDoubleClick={accion} // Permite también que la acción se ejecute con doble clic
            style={{
              transform: `scale(${size}) rotate(${rotacion}deg)`, // Escala y rotación basadas en el estado
              color: colorBotones, // Aplicar color de texto dinámico a los botones
            }}
          >
            Botón {index + 1} {/* Etiqueta del botón */}
          </button>
        ))}
      </div>
      {/* Texto que puede cambiar según las acciones */}
      <p className="texto-visible" style={{ color: colorTexto, fontSize: `${tamañoTexto}px` }}>
        Este texto puede cambiar.
      </p>
    </div>
  );
};

export default Botones;