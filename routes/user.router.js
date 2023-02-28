const UserService= require('../services/user.service')
const esxpress= require('express');
const {validHandler}= require('../middlewares/validator.handler');
const {createUserSchema,updateUserSchemas, getUserSchemas, deleteUser}= require('../schemas/user.schemas')
const router= esxpress.Router()
const service= new UserService();

    router.get('/',(req, res)=>{
        const usuarios= service.find();
        res.json(usuarios);
    });

    router.get('/:idUser',
        validHandler(getUserSchemas, 'params'),
        (req,res, next)=>{
            try {
                const {idUser}=req.params;
                const usuario= service.findOne(idUser);
                res.json(usuario);
            } catch (error) {
                next(error);
            }
    });

    router.post('/', 
    validHandler(createUserSchema, 'body'),
    (req, res, next)=>{
        try {
            const body= req.body;
            const usuario= service.create(body);
            res.status(201).json(usuario);
        } catch (error) {
            next(error);
        }
    });

    router.patch('/:idUser', 
    validHandler(getUserSchemas, 'params'),
    validHandler(updateUserSchemas, 'body'),
    (req, res, next)=>{
        try {
            const {idUser}= req.params;
            const body= req.body;
            const usuario=service.update(idUser, body);
            res.status(201).json(usuario);
        } catch (error) {
            next(error);
        }
    });

    router.delete('/:idUser', 
    validHandler(deleteUser, 'params'),
    (req, res, next)=>{
        try {
            const {idUser}= req.params;
            const usuario= service.delete(idUser);
            res.status(201).json(usuario);
        } catch (error) {
            next(error);

        }
    })

module.exports=router;