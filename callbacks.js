        
        
        
    // setTimeout(function () {
    //     console.log('hola mundo');
    // },1000);

    const getUsuarioByID=(id, callback)=>{

        const usuario = {
            id,
            nombre: "jimmy"
        }

        setTimeout(() => {
           callback(usuario); 
        }, 1500);
    }

    getUsuarioByID(10, (usuario)=>{
        console.log(usuario);
    });

