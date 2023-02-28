const boom= require('@hapi/boom');


class UserService{
    
    constructor(){
        this.User=[];
        this.generate();
    }

    generate(){
        this.User=[{
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
    }

    create(data){
        
        const newUser={
            idUser: '4bx',
            ...data
        }
        this.User.push(newUser);
        return newUser;


    }

    find(){
        
        return this.User;

    }

    findOne(id){
        //const name= this.getTotal();
        const user= this.User.find(item=> item.idUser===id);
        if(!user){
           throw boom.notFound('product not fount');

        }
        return user;


    }

    update(id, change){
        const index=this.User.findIndex(item=>item.idUser===id);
        if(index===-1){
            throw boom.notFound('product not fount');;
        }
        const userEncontrado=this.User[index];
        this.User[index]={
            ...userEncontrado,
            ...change
        }
        return this.User[index];
    }

    delete(id){
        
        const index=this.User.findIndex(item=> item.idUser===id);

        if(index===-1){
            throw boom.notFound('product not fountttttt');;
        }
        this.User.splice(index,1);
        return {id};
    }
}

module.exports= UserService;