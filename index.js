const {obtenerPromedio, arvg} = require('/datos.js');

console.log(arvg);
if (arvg._[0] == 'promedio') {
    console.log('el promedio de ' + arvg.n + 'es');
} else {
    console.log(' promedio no calculado');
}