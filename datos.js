const opciones = {
    nombre: {
        alias: 'n',
        demand: true
    },
    matematicas:{
        default: 0,
        alias: 'm'
    },
    ingles:{
        default: 0,
        alias: 'i'
    },
    programacion:{
        demand: true,
        alias: 'p'
    }
}

let obtenerPromedio = (nota_uno, nota_dos, nota_tres);

const argv = require('yargs')
            .command('promedio' , 'Calcular el promedio', opciones)
            .argv

module.exports = {
    obtenerPromedio,
    argv
}
