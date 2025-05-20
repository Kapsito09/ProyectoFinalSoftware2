const { crearUsuario, eliminarUsuario, obtenerUsuarios } = require('../Back/usuarios/usuarios');

describe('Usuarios', () => {
  beforeEach(() => {
    // Reiniciar la lista antes de cada prueba
    while (obtenerUsuarios().length > 0) {
      obtenerUsuarios().pop();
    }
  });

  test('Crear usuario válido', () => {
    const u = crearUsuario('Kapsito', 'kapsito@compensar.com');
    expect(u.nombre).toBe('Kapsito');
  });

  test('Eliminar usuario existente', () => {
    const u = crearUsuario('Ana', 'ana@correo.com');
    const resultado = eliminarUsuario(u.id);
    expect(resultado.nombre).toBe('Ana');
    expect(obtenerUsuarios().find(x => x.id === u.id)).toBeUndefined();
  });

  test('Eliminar usuario inexistente lanza error', () => {
    expect(() => eliminarUsuario(999)).toThrow('Usuario no encontrado');
  });
});