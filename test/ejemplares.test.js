const { registrarEjemplar, eliminarEjemplar, obtenerEjemplares } = require('../Back/ejemplares/ejemplares');

describe('Ejemplares', () => {
  beforeEach(() => {
    // Reiniciar la lista antes de cada prueba
    while (obtenerEjemplares().length > 0) {
      obtenerEjemplares().pop();
    }
  });

  test('Registrar ejemplar válido', () => {
    const e = registrarEjemplar(101, 'E001');
    expect(e.recursoId).toBe(101);
    expect(e.codigoEjemplar).toBe('E001');
  });

  test('Eliminar ejemplar existente', () => {
    const e = registrarEjemplar(102, 'E002');
    const resultado = eliminarEjemplar(e.id);
    expect(resultado.codigoEjemplar).toBe('E002');
    expect(obtenerEjemplares().find(x => x.id === e.id)).toBeUndefined();
  });

  test('Eliminar ejemplar inexistente lanza error', () => {
    expect(() => eliminarEjemplar(999)).toThrow('Ejemplar no encontrado');
  });

  test('Obtener lista de ejemplares', () => {
    registrarEjemplar(103, 'E003');
    registrarEjemplar(104, 'E004');
    const ejemplares = obtenerEjemplares();
    expect(ejemplares.length).toBe(2);
    expect(ejemplares[0].codigoEjemplar).toBe('E003');
    expect(ejemplares[1].codigoEjemplar).toBe('E004');
  });
});