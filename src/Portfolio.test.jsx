import { render, screen } from '@testing-library/react';
import App from './App';

describe('Portafolio Personal', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Muestra fotografía personal', () => {
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img.src).toMatch(/.(jpg|jpeg|png)$/);
  });

  test('Contiene número de teléfono', () => {
    const phoneRegex = /09\d{8}/;
    expect(screen.getByText(phoneRegex)).toBeInTheDocument();
  });

  test('Contiene nombres y apellidos', () => {
    const fullName = /Esteban Vivar/i;
    expect(screen.getByText(fullName)).toBeInTheDocument();
  });

  test('Tiene al menos 5 habilidades', () => {
    const skills = screen.getAllByTestId('skill-item');
    expect(skills.length).toBeGreaterThanOrEqual(5);
  });

  test('Tiene al menos 3 proyectos', () => {
    const projects = screen.getAllByTestId('project-item');
    expect(projects.length).toBeGreaterThanOrEqual(3);
  });
});
