const faker= require('faker');
const boom= require('@hapi/boom');


class ProductsService{

    constructor(){
        this.products=[];
        this.generate();
    }

    async generate(){
        const limite=5;
  
        for (let index = 0; index <limite; index++) {
          
          this.products.push({
            id: faker.datatype.uuid(),
            name:faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
            isBlock: faker.datatype.boolean(),
          });
          
        }
    }

    async create(data){
        const newProduct={
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;

    }

    async find(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(this.products);
            })
        })
    }

    async findOne(id){
       //const name= this.getTotal();
       const product= this.products.find(item=> item.id===id);

       if(!product){
        throw boom.notFound('product not fount');
       }else if(product.isBlock){

                throw boom.conflict('product is block');
       }
        return product;


    }

    async update(id, change){

        const  index = this.products.findIndex(item=> item.id===id);
        if(index===-1){
            throw boom.notFound('product not fount');
        }
        const product=this.products[index];
        this.products[index]={
            ...product,
            ...change
        }
        return this.products[index];


    }

    async delete(id){
        const  index = this.products.findIndex(item=> item.id===id);
        if(index===-1){
            throw new boom.notFound('product not fount');;
        }
        
        this.products.splice(index, 1);
        return {id};

    }
}
module.exports= ProductsService;