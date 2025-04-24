const { preguntar, cerrar } = require('./src/utils/input');
const { crearUsuario, eliminarUsuario, obtenerUsuarios } = require('./src/usuarios/usuarios');
const { agregarRecurso } = require('./src/recursos/recursos');
const { registrarPrestamo } = require('./src/prestamos/prestamos');
const { registrarEjemplar } = require('./src/ejemplares/ejemplares');
const { generarReporte } = require('./src/admin/admin');

async function main() {
  console.log('📚 Sistema de Biblioteca - Pruebas Manuales');
  const opcion = await preguntar('Selecciona módulo (usuario/recurso/prestamo/ejemplar/reporte): ');

  try {
    switch (opcion) {
      case 'usuario':
        await menuUsuarios();
        break;

      case 'recurso':
        const titulo = await preguntar('Título: ');
        const autor = await preguntar('Autor: ');
        console.log(agregarRecurso(titulo, autor));
        break;

      case 'prestamo':
        const uid = await preguntar('ID Usuario: ');
        const rid = await preguntar('ID Recurso: ');
        console.log(registrarPrestamo(uid, rid));
        break;

      case 'ejemplar':
        const ridEj = await preguntar('ID Recurso: ');
        const codigo = await preguntar('Código del ejemplar: ');
        console.log(registrarEjemplar(ridEj, codigo));
        break;

      case 'reporte':
        const modulo = await preguntar('Módulo del reporte: ');
        console.log(generarReporte(modulo));
        break;

      default:
        console.log('❌ Opción inválida');
    }
  } catch (error) {
    console.error('🚫 Error:', error.message);
  }

  await cerrar();
}

async function menuUsuarios() {
  console.log('\n--- MÓDULO USUARIOS ---');
  const accion = await preguntar('Acción (crear/eliminar/listar): ');

  switch (accion) {
    case 'crear':
      const nombre = await preguntar('Nombre: ');
      const correo = await preguntar('Correo: ');
      console.log(crearUsuario(nombre, correo));
      break;

    case 'eliminar':
      const id = await preguntar('ID del usuario a eliminar: ');
      console.log(eliminarUsuario(Number(id)));
      break;

    case 'listar':
      console.log('Usuarios registrados:', obtenerUsuarios());
      break;

    default:
      console.log('❌ Acción no válida');
  }
}

main();