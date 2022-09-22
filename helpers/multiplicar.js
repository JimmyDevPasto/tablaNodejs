

//  // return new Promise((resolve,reject)=>{

//     //     console.log('=============================');
//     //     console.log('  Tabla del: '+ base);
//     //     console.log('=============================');
    
//     //     let salida='';
//     //     for (let i = 0; i < 11; i++) {
//     //         let mul = base*i
//     //           salida+=`${base} x ${i}' = '${mul}\n`;
        
           
//     //     }
    
//     //      fs.writeFileSync(`tabla-${base}.txt`,salida)
    
//     //      resolve(`Tabla ${base}`);

//     // })
 const fs = require('fs');
 const colors= require('colors');

 const crearArchivo = async (base= 5, l=false, h=10)=>{

    try {

             
    
        let salida='',consola='';
        

        
        for (let i = 1; i <=h; i++) {
             
              salida+=`${base} x ${i}${' = '}${base*i}\n`;
              consola+=`${base} ${'x'.rainbow} ${i}${' = '.white}${base*i}\n`.green;
        
           
        }
                    
        if (l) {
            console.log('============================='.red);
            console.log('  Tabla del: '.rainbow+ colors.blue(base)+' hasta el',h);            
            console.log('============================='.red);
            console.log(consola);
        }
         fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
    
         return(`Tabla ${base}`);
    } catch (error) {
        throw(error);
    }
       
    
}



module.exports ={
    crearArchivo
}

