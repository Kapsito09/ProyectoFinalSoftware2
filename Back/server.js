const express = require('express');
const path = require('path');
const cors = require('cors');

const { agregarRecurso } = require('./recursos/recursos');
const { crearUsuario, eliminarUsuario, obtenerUsuarios } = require('./usuarios/usuarios');
const { crearReporte, obtenerReportes, eliminarReporte } = require('./admin/admin');
const { registrarPrestamo } = require('./prestamos/prestamos');
const { registrarEjemplar, obtenerEjemplares, eliminarEjemplar } = require('./ejemplares/ejemplares');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../Front')));

// === EJEMPLARES ===
app.post('/ejemplares', (req, res) => {
  const { recursoId, codigoEjemplar } = req.body;
  try {
    const nuevoEjemplar = registrarEjemplar(recursoId, codigoEjemplar);
    res.status(201).json(nuevoEjemplar);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/ejemplares', (req, res) => {
  res.json(obtenerEjemplares());
});

app.delete('/ejemplares/:id', (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const eliminado = eliminarEjemplar(id);
    res.json(eliminado);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// === REPORTES ===
app.get('/reportes', (req, res) => {
  res.json(obtenerReportes());
});

app.post('/reporte', (req, res) => {
  try {
    const { modulo } = req.body;
    const nuevo = crearReporte(modulo);
    res.json({ reporte: `✅ Reporte generado del módulo: ${nuevo.modulo}` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/reportes/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const eliminado = eliminarReporte(id);
    res.json(eliminado);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// === USUARIOS ===
app.get('/usuarios', (req, res) => {
  res.json(obtenerUsuarios());
});

app.post('/usuarios', (req, res) => {
  const { nombre, correo } = req.body;
  try {
    const nuevoUsuario = crearUsuario(nombre, correo);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const eliminado = eliminarUsuario(id);
    res.json(eliminado);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// === PRÉSTAMOS ===
app.post('/prestamos', (req, res) => {
  const { usuarioId, recursoId } = req.body;
  try {
    const nuevoPrestamo = registrarPrestamo(usuarioId, recursoId);
    res.status(201).json(nuevoPrestamo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// === RECURSOS ===
app.post('/recursos', (req, res) => {
  const { titulo, autor } = req.body;
  try {
    const nuevoRecurso = agregarRecurso(titulo, autor);
    res.status(201).json(nuevoRecurso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// === RUTA RAÍZ ===
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Front/components/Index.html'));
});

// INICIAR SERVIDOR
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
