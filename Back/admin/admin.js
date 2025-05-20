let reportes = [];

// Crear reporte
function crearReporte(modulo) {
  if (!modulo) {
    throw new Error('El nombre del módulo es obligatorio');
  }
  const nuevoReporte = { id: Date.now(), modulo };
  reportes.push(nuevoReporte);
  return nuevoReporte;
}

// Obtener todos los reportes
function obtenerReportes() {
  return reportes;
}

// Eliminar reporte
function eliminarReporte(id) {
  const index = reportes.findIndex(r => r.id === id);
  if (index === -1) {
    throw new Error('Reporte no encontrado');
  }
  return reportes.splice(index, 1)[0];
}

module.exports = { crearReporte, obtenerReportes, eliminarReporte };
