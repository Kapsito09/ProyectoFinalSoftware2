function registrarEjemplar(recursoId, codigoEjemplar) {
    if (!recursoId || !codigoEjemplar) {
      throw new Error('Recurso y código del ejemplar son obligatorios');
    }
    return { id: Date.now(), recursoId, codigoEjemplar };
  }
  module.exports = { registrarEjemplar };