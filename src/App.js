import './App.css';          // Estilos globales de la aplicación
import './Galeria.css';      // Estilos específicos para el componente Galeria
import './Formulario.css';  // Estilos específicos para el componente Formulario
import './Juego.css';       // Estilos específicos para el componente AdivinaNumero (Juego)
import './Botones.css';     // Estilos específicos para el componente Botones
import './Notas.css';       // Estilos específicos para el componente Notas

import Galeria from './Galeria01'; // Componente para mostrar una galería de imágenes
import Formulario from './Formulario'; // Componente para un formulario con validación en tiempo real
import AdivinaNumero from './Juego'; // Componente para el juego de adivinar el número
import Botones from './Botones'; // Componente con botones interactivos
import Notas from './Notas'; // Componente para tomar notas

function App() {
  return (
    <div className="app">
      {/* Título principal de la aplicación */}
      <h1 className="titulo-principal">Mis Componentes Interactivos</h1>

      {/* Sección para la galería de imágenes */}
      <section className="seccion-galeria">
        <h2 className="subtitulo">Galería de Imágenes</h2>
        <Galeria /> {/* Renderiza el componente Galeria */}
      </section>

      {/* Sección para el formulario de validación */}
      <section className="seccion-formulario">
        <h2 className="subtitulo">Formulario de Validación en Tiempo Real</h2>
        <Formulario /> {/* Renderiza el componente Formulario */}
      </section>

      {/* Sección para el juego de adivinar el número */}
      <section className="seccion-adivina">
        <h2 className="subtitulo">Juego: Adivina el Número</h2>
        <AdivinaNumero /> {/* Renderiza el componente AdivinaNumero */}
      </section>

      {/* Sección para los botones interactivos */}
      <section className="seccion-botones">
        <h2 className="subtitulo">Botones Interactivos</h2>
        <Botones /> {/* Renderiza el componente Botones */}
      </section>

      {/* Sección para la aplicación de notas */}
      <section className="seccion-notas">
        <h2 className="subtitulo">Aplicación de Notas</h2>
        <Notas /> {/* Renderiza el componente Notas */}
      </section>
    </div>
  );
}

export default App;