const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function preguntar(pregunta) {
  return new Promise(resolve => rl.question(pregunta, resolve));
}
async function cerrar() { rl.close(); }
module.exports = { preguntar, cerrar };