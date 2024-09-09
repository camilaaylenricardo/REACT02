import React, { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({ nombre: '', correo: '', contraseña: '' });
  
  // Estado para almacenar los errores de validación
  const [errores, setErrores] = useState({});
  
  // Estado para mostrar el mensaje de éxito al enviar el formulario
  const [exito, setExito] = useState('');

  // Maneja el cambio en los campos del formulario
  const manejarCambio = (e) => {
    const { name, value } = e.target; // Obtiene el nombre y valor del campo modificado
    setFormData({ ...formData, [name]: value }); // Actualiza el estado con el nuevo valor

    // Validaciones en tiempo real mientras el usuario escribe
    switch (name) {
      case 'correo':
        // Valida que el correo tenga un formato válido
        setErrores({
          ...errores,
          correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Correo electrónico inválido.',
        });
        break;
      case 'contraseña':
        // Valida que la contraseña tenga al menos 6 caracteres
        setErrores({
          ...errores,
          contraseña: value.length < 6 ? 'La contraseña debe tener al menos 6 caracteres.' : '',
        });
        break;
      default:
        break;
    }
  };

  // Maneja el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del envío de formulario

    // Validaciones adicionales al enviar
    const nuevosErrores = {};
    if (!formData.nombre.trim()) {
      // Validación del campo "nombre"
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      // Validación del campo "correo"
      nuevosErrores.correo = 'Correo electrónico inválido.';
    }
    if (formData.contraseña.length < 6) {
      // Validación del campo "contraseña"
      nuevosErrores.contraseña = 'La contraseña debe tener al menos 6 caracteres.';
    }

    if (Object.keys(nuevosErrores).length > 0) {
      // Si hay errores, los mostramos y limpiamos el mensaje de éxito
      setErrores(nuevosErrores);
      setExito('');
    } else {
      // Si no hay errores, limpiamos los errores y mostramos el mensaje de éxito
      setErrores({});
      setExito('¡Formulario enviado correctamente!');
      setFormData({ nombre: '', correo: '', contraseña: '' }); // Limpiar campos del formulario
    }
  };

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      {/* Campo de entrada para el nombre */}
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={manejarCambio}
      />
      {errores.nombre && <span className="error">{errores.nombre}</span>} {/* Mensaje de error para el nombre */}

      {/* Campo de entrada para el correo electrónico */}
      <input
        type="email"
        name="correo"
        placeholder="Correo Electrónico"
        value={formData.correo}
        onChange={manejarCambio}
      />
      {errores.correo && <span className="error">{errores.correo}</span>} {/* Mensaje de error para el correo */}

      {/* Campo de entrada para la contraseña */}
      <input
        type="password"
        name="contraseña"
        placeholder="Contraseña"
        value={formData.contraseña}
        onChange={manejarCambio}
      />
      {errores.contraseña && <span className="error">{errores.contraseña}</span>} {/* Mensaje de error para la contraseña */}

      {/* Botón para enviar el formulario */}
      <button type="submit">Enviar</button>

      {/* Mensaje de éxito al enviar el formulario correctamente */}
      {exito && <span className="exito">{exito}</span>}
    </form>
  );
};

export default Formulario;