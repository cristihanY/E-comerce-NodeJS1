const expressss= require('express');

const apli= expressss();
const port= 3002;

apli.get('/', (req, res)=>{
    res.send('Hola cumpa');
})

apli.listen(port,()=>{
    console.log('My port'+port);
})

apli.get('/hello', (req, res)=>{
    res.json({
        name: 'cristihan',
        lastname:'yanqui'
    })
});

apli.get('/product/:productId',(req, res)=>{
    const {productId}= req.params;
    res.json([{
        productId,
        name:'paneton',
        price: 23,
        quantity: 100
    }]);
});
