const opts = {
    base: {
        demand: true, //comando obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Imprime en consola la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}