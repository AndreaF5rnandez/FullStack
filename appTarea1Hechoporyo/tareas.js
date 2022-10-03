const fs = require('fs'); //modulo que nos permite leer el archivo JSON

const arreglo = JSON.parse(fs.readFileSync(('tareas.json'),'utf-8'));

module.exports = arreglo;

