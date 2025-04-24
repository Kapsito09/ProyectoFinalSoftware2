const { generarReporte } = require('../src/admin/admin');
describe('Administración', () => {
  test('Generar reporte válido', () => {
    const r = generarReporte('usuarios');
    expect(r).toContain('usuarios');
  });
});