// const fs = require('fs');
// const fs = require('fs');

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //si hay un const y llaves es una destructuracion de arreglos

let comando = argv._[0];

switch (comando) {
    case 'listar':

        // listarTabla(argv.base, argv.limite)
        //     .then(arreglo => console.log('Lista de la tabla'))
        //     .catch(e => console.log(e));
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:` + ` ${archivo}`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');


}

// console.log(argv);

// let base = '4';
// const data = new Uint8Array(Buffer.from('Hello Node.js'));

// console.log(process.argv);
// let argv2 = process.argv;
// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1] // Convertir un string a un arreglo