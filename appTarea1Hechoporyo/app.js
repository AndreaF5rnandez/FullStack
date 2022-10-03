let AppTareas = require('./tareas');

let accion = process.argv[2];
switch (accion){
    case 'listar': 
            for(let i = 0; i < AppTareas.length; i++){
                console.log(AppTareas[i].titulo);
            }
        break;
    case undefined:
        console.log('Tiene que pasar algun argumento');
        break;
        default:
        console.log('No entiendo lo que quiere decir');
        console.log('la unica funcion que puede hacer es "listar"');
        break;
}