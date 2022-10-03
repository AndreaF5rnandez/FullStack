const fs = require('fs');

let archivoTarea = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo,'utf-8'));
    }
}

console.log(archivoTarea);