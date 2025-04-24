const { registrarEjemplar } = require('../src/ejemplares/ejemplares');
describe('Ejemplares', () => {
  test('Registrar ejemplar válido', () => {
    const e = registrarEjemplar(101, 'EJ001');
    expect(e.codigoEjemplar).toBe('EJ001');
  });
});
