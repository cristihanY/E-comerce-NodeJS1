const express= require('express');
const CategoryService =require('../services/categoria.service');
const router= express.Router()
const service= new CategoryService();


router.get('/:categoryId/productos/:productId',(req,res)=>{
    const { categoryId, productId}=req.params;
    const productoPed= service.findIdefe(categoryId, productId)
    res.json(productoPed);
  
  });

  router.get('/productos/:categoryId',(req, res)=>{
    const {categoryId}=req.params;
    const productCat= service.findForCategory(categoryId);
    res.status(201).json(productCat);


  });
  router.get('/productos',(req, res)=>{
    const productCatee=service.findCategory();
    res.status(201).json(productCatee);
  })


  router.get('/', (req, res, next)=>{
    try {
      const product= service.find();
      res.status(201).json(product);
      
    } catch (error) {
      next(error);
    }
  });

  router.post('/',(req, res)=>{
    const data= req.body;
    const product= service.create(data);
    res.status(201).json(product);
  });

  router.get('/:id',(req, res)=>{
    const {id}= req.params;
    const product= service.findOne(id);
    res.status(201).json(product);

  });

  router.patch('/:id', (req, res)=>{
    const {id}=req.params;
    const body=req.body;
    const producto=service.update(id, body);
    res.status(201).json(producto);
  });

  router.delete('/:id', (req, res)=>{
    const {id}=req.params;
    const productDe= service.delete(id);
    res.status(202).json(productDe);
  })

module.exports=router;