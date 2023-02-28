const Joi = require('joi');
const idUser=Joi.string();
const name=Joi.string().min(6).max(60);
const lastaname= Joi.string().min(6).max(60);
const email=Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','yanqui'] } });


const createUserSchema= Joi.object({
    name: name.required(),
    lastaname: lastaname.required(),
    email: email.required()

});

const updateUserSchemas= Joi.object({
    name: name,
    lastaname: lastaname,
    email: email
});

const getUserSchemas= Joi.object({
    idUser: idUser.required(),
});

const deleteUser= Joi.object({
    idUser: idUser.required()
});

module.exports={createUserSchema,updateUserSchemas, getUserSchemas, deleteUser}
