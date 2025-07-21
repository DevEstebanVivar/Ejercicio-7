import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Esteban Vivar</h1>
        <p>Desarrollador de Software</p>
        <img
          src="https://via.placeholder.com/150"
          alt="Foto de Esteban"
          style={{ borderRadius: '8px', width: '150px' }}
        />
      </header>

      <section>
        <h2>Datos Personales</h2>
        <ul>
          <li>Teléfono: 0987654321</li>
          <li>Correo: esteban@example.com</li>
        </ul>
      </section>

      <section>
        <h2>Habilidades</h2>
        <ul id="habilidades">
          <li data-testid="skill-item">JavaScript</li>
          <li data-testid="skill-item">React</li>
          <li data-testid="skill-item">Node.js</li>
          <li data-testid="skill-item">HTML</li>
          <li data-testid="skill-item">CSS</li>
        </ul>
      </section>

      <section>
        <h2>Proyectos</h2>
        <ul id="proyectos">
          <li data-testid="project-item">
            <strong>Portfolio Web</strong> – Sitio personal con React
          </li>
          <li data-testid="project-item">
            <strong>App de Tareas</strong> – CRUD con Firebase
          </li>
          <li data-testid="project-item">
            <strong>Clon de Netflix</strong> – UI con consumo de API
          </li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2025 Esteban Vivar</p>
      </footer>
    </div>
  );
}

export default App;
