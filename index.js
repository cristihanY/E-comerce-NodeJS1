

const express= require('express');
const routerApi=require('./routes');
const cors= require('cors');
const {logErrors, errorHandler, boomErrorHandler}=require('./middlewares/erro.handler')


const app=express();
const port=3001;

app.use(express.json());
const whiteList=['http://127.0.0.1:5500', 'http://127.0.0.1:5501'];
const options={
    origin:(origin,callback)=>{
      if(whiteList.includes(origin)){
        callback(null, true);
      }else{
        callback(new Error('NO permitido'));
      }
    }
}
app.use(cors());

app.get('/',(req,res)=>{
  res.send('Hola mi server en express');
});

app.get('/nueva-rout',(req,res)=>{
  res.send('Hola mi server en express desde la nueva ruta');
});
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);








//productos categorias, orden de compra,usuarios, crear entpoit que devuelva array de productos 

app.listen(port,()=>{
  console.log('mi puerto'+port);
});
