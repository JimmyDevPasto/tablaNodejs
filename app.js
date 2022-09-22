// tabla del 5 


const { crearArchivo}= require('./helpers/multiplicar');
const colors = require('colors');
const argv =require('./config/yargs'); 


console.clear();

console.log(argv);

console.log('base:yargs',argv.b,argv.h);

    // //const base=8;
    // const [ , ,arg3='base=5']= process.argv;
    // const [,base =5]= arg3.split('=');
    // console.log(base);
    
    crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo=>console.log(nombreArchivo.rainbow, 'Creado'.blue))
    .catch((err) => {
        console.log(err);
    });; 
    
 





