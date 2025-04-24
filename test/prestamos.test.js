const { registrarPrestamo } = require('../src/prestamos/prestamos');
describe('Préstamos', () => {
  test('Registrar préstamo válido', () => {
    const p = registrarPrestamo(1, 101);
    expect(p.usuarioId).toBe(1);
  });
});
