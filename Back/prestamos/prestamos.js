function registrarPrestamo(usuarioId, recursoId) {
    if (!usuarioId || !recursoId) {
      throw new Error('Usuario y recurso son obligatorios');
    }
    return { id: Date.now(), usuarioId, recursoId, fecha: new Date() };
  }
  module.exports = { registrarPrestamo };