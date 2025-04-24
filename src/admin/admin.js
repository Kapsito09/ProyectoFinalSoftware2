function generarReporte(modulo) {
    if (!modulo) throw new Error('Módulo requerido para el reporte');
    return `Reporte generado para módulo: ${modulo}`;
  }
  module.exports = { generarReporte };