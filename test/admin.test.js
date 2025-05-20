const { crearReporte, obtenerReportes, eliminarReporte} = require('../Back/admin/admin');

describe('Gestión de reportes', () => {
  beforeEach(() => {
    // Limpiar todos los reportes antes de cada prueba
    while (obtenerReportes().length > 0) {
      eliminarReporte(obtenerReportes()[0].id);
    }
  });

  test('crearReporte agrega un nuevo reporte correctamente', () => {
    const modulo = 'Finanzas';
    const nuevo = crearReporte(modulo);
    const reportes = obtenerReportes();

    expect(reportes.length).toBe(1);
    expect(reportes[0].modulo).toBe(modulo);
    expect(reportes[0].id).toBe(nuevo.id);
  });

  test('crearReporte lanza error si el módulo está vacío', () => {
    expect(() => {
      crearReporte('');
    }).toThrow('El nombre del módulo es obligatorio');
  });

  test('obtenerReportes devuelve la lista de reportes', () => {
    crearReporte('Biblioteca');
    crearReporte('Préstamos');

    const reportes = obtenerReportes();
    expect(reportes.length).toBe(2);
    expect(reportes[0].modulo).toBe('Biblioteca');
    expect(reportes[1].modulo).toBe('Préstamos');
  });

  test('eliminarReporte elimina el reporte por ID correctamente', () => {
    const r1 = crearReporte('Estadísticas');
    const r2 = crearReporte('Logística');

    const eliminado = eliminarReporte(r1.id);
    expect(eliminado.modulo).toBe('Estadísticas');

    const reportes = obtenerReportes();
    expect(reportes.length).toBe(1);
    expect(reportes[0].modulo).toBe('Logística');
  });

  test('eliminarReporte lanza error si el ID no existe', () => {
    expect(() => {
      eliminarReporte(999999); // ID ficticio
    }).toThrow('Reporte no encontrado');
  });
});
