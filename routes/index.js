const express= require('express');
const productsRouter=require('./products.router');
const userRouter=require('./user.router');
const categoryRouter=require('./categories.router');


function  routerApi(app){
    const router= express.Router();
    app.use('/api/v1.0', router)
    router.use('/products', productsRouter);
    router.use('/user',userRouter );
    router.use('/category', categoryRouter);
}

module.exports= routerApi;