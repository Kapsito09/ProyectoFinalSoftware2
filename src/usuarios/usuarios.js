let usuarios = []; 

function crearUsuario(nombre, correo) {
  if (!nombre || !correo) {
    throw new Error('Nombre y correo son obligatorios');
  }
  const nuevoUsuario = { id: Date.now(), nombre, correo };
  usuarios.push(nuevoUsuario);
  return nuevoUsuario;
}

function eliminarUsuario(id) {
  const index = usuarios.findIndex(u => u.id === id);
  if (index === -1) {
    throw new Error('Usuario no encontrado');
  }
  const eliminado = usuarios.splice(index, 1)[0];
  return eliminado;
}

function obtenerUsuarios() {
  return usuarios;
}

module.exports = { crearUsuario, eliminarUsuario, obtenerUsuarios };