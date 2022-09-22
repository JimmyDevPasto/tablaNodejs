const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla',

})
.check((argv,options)=>{
    if (isNaN(argv. b)) {
        throw 'La base tiene que ser un número'
    }
    return true;
})
.option('l',{
    alias:'listar',
    type:'boolean',
    default:false,
    describe:'Muestra la tabla'
})

.option('h',{
    alias:'hasta',
    type:'number',
    describe:'Hasta que valor va la tabla',
    default:10

})
.argv;
    
module.exports= argv;