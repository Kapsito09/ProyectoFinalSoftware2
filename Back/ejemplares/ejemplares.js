let ejemplares = []; 

// Registrar ejemplar
function registrarEjemplar(recursoId, codigoEjemplar) {
  if (!recursoId || !codigoEjemplar) {
    throw new Error('Recurso y código del ejemplar son obligatorios');
  }
  const nuevoEjemplar = { id: Date.now(), recursoId, codigoEjemplar };
  ejemplares.push(nuevoEjemplar);
  return nuevoEjemplar;
}

// Obtener lista de ejemplares
function obtenerEjemplares() {
  return ejemplares;
}

// Eliminar ejemplar
function eliminarEjemplar(id) {
  const index = ejemplares.findIndex(e => e.id === id);
  if (index === -1) {
    throw new Error('Ejemplar no encontrado');
  }
  const eliminado = ejemplares.splice(index, 1)[0];
  return eliminado;
}

module.exports = { registrarEjemplar, obtenerEjemplares, eliminarEjemplar };
