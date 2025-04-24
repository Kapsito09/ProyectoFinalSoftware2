const { agregarRecurso } = require('../src/recursos/recursos');
describe('Recursos', () => {
  test('Agregar recurso válido', () => {
    const r = agregarRecurso('Eficiencia de las pruebas Automatizadas', 'Kapsito');
    expect(r.titulo).toBe('Eficiencia de las pruebas Automatizadas');
  });
});