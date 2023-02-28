const esxpress= require('express');

const aplications= esxpress();
const port= 3003;

const array1=[{
    idUser: '1b',
    name: 'Juan',
    lastaname:'perez',
    email: 'juan@email.com'
},{
    idUser: '2b',
    name: 'Juana',
    lastaname:'Laerte',
    email: 'juana@email.com'
},
{
    idUser: '3b',
    name: 'Juanita',
    lastaname:'Laerte',
    email: 'juana@email.com'
},
{
    idUser: '3bx',
    name: 'Luanita',
    lastaname:'Laertee',
    email: 'luana@email.com'
}]

aplications.get('/', (req, res)=>{
    res.send('Hola desde el servidor 3003');
});

aplications.get('/product',(req, res)=>{
    res.json([{
        name: 'banana',
        price: 24,
        quantity: 32
    },{
        name: 'manzana',
        price: 32,
        quantity: 43
    }
]);
});

aplications.get('/ordenCompra/:idCompra/compra2/:idCompra1',(req, res)=>{
    const {idCompra,idCompra1}=req.params;
    res.json([{idCompra, fech:'12-12-12', total:'32'},{idCompra1, fech:'12-12-12', total:'54'}]);
});

aplications.get('/user',(req, res)=>{
    res.json(array1);
});

//parseInt(id)==array1[i].idUser

/**
 *     if(typeof(id)=='string'){

        array1.forEach(element => {
            if(id==element.idUser){
               res.json(array1[uno]);   
            }
            uno=uno+1;
            console.log(uno);
        });
    }else{
        res.send('id no emcontrado ewe'+id)
    }
--------------------2------------
        for(let i=1; i<=(array1.length);i++){
        if(id==array1[i-1].idUser){
            uno=i;
            break;
        }
    }
 */


aplications.get('/user/:id',(req,res)=>{
    const {id}=req.params;
    let uno=0;
    for(let i in array1){
        if(id==array1[i].idUser){
            uno=(parseInt(i)+1);
            break;
        }
    }
    if(uno>0){
        res.json(array1[uno-1]);
    }else{
        res.send('el id ingreusado es incorrecto');
    }
});


aplications.listen(port, ()=>{
    console.log('Escuchando por el puerto '+ port);
});

//productos categorias, orden de compra,usuarios, crear entpoit que devuelva array de productos 