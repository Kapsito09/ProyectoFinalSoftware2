function agregarRecurso(titulo, autor) {
    if (!titulo || !autor) {
      throw new Error('Título y autor son obligatorios');
    }
    return { id: Date.now(), titulo, autor };
  }
  module.exports = { agregarRecurso };