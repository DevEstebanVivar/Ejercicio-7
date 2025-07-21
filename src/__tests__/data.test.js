import { personal } from '../data/personal';
import { habilidades } from '../data/habilidades';
import { proyectos } from '../data/proyectos';

describe('Validación de datos del portafolio', () => {
  test('Datos personales tienen foto, teléfono y nombres', () => {
    expect(personal).toHaveProperty('foto');
    expect(typeof personal.foto).toBe('string');
    
    expect(personal).toHaveProperty('telefono');
    expect(typeof personal.telefono).toBe('string');
    
    expect(personal).toHaveProperty('nombre');
    expect(typeof personal.nombre).toBe('string');
  });

  test('Listado de habilidades tiene al menos 5 elementos', () => {
    expect(Array.isArray(habilidades)).toBe(true);
    expect(habilidades.length).toBeGreaterThanOrEqual(5);
  });

  test('Listado de proyectos tiene al menos 3 elementos', () => {
    expect(Array.isArray(proyectos)).toBe(true);
    expect(proyectos.length).toBeGreaterThanOrEqual(3);
  });
});
