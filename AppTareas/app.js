const tareass = require('./tareas');

let accion = process.argv[2];

switch(accion){
    case 'listar':
        console.log('listado de tareas');
        let tareas = archivoTareas.leerJSON();
        for(let i=0; i < tareas.length; i++){
            console.log(i + '. '+ tareas[i].titulo + '-'+ tareas[i].estado);
        }
        console.log()
        break;

        case undefined:
            console.log('tenes que pasarme una accion');
            break;
        default:
            console.log('no entiendo que me estas pidiendo');
            console.log('Las acciones disponibles son:listar');
            break;
}