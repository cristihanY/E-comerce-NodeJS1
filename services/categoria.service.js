

class CategoryService{
    constructor(){
        this.productos=[];
        this.category=[];
        this.GenerateCategory();
        this.GenerateProduct();
    }
    GenerateCategory(){
        this.category=[{
            idCategory:'1x',
            categoriaId: 'carne'
        },
        {
            idCategory:'2x',
            categoriaId: 'verdura'
        }]
    }
    GenerateProduct(){
        this.productos=[{
            idP:'1a',
            name: 'pollo',
            price: 12,
            categoriaId: this.category[0].idCategory
        },
        {
            idP:'1b',
            name: 'zanahoria',
            price: 14,
            categoriaId: this.category[1].idCategory
        },
        {
            idP:'2a',
            name: 'res',
            price: 11,
            categoriaId: this.category[0].idCategory
        },
        {
            idP:'2b',
            name: 'lechuga',
            price: 122,
            categoriaId: this.category[1].idCategory
        },
        {
            idP:'3a',
            name: 'cordero',
            price: 121,
            categoriaId: this.category[0].idCategory
        }]
        
    
    };

    findForCategory(idCategory){
        const productCat= this.productos.filter(items=>items.categoriaId===idCategory);
        const index1= this.category.findIndex(item => item.idCategory===idCategory);
        if(index1===-1){
            throw new Error('Product and Categoryy whit the id not found');

        }else{
            const categoria = this.category.find(item => item.idCategory===idCategory);
                for (const i in productCat) {
                    const product=productCat[i];
                      productCat[i]={
                          ...product,
                          ...{categoriaId:categoria.categoriaId}
                      }
                    }
                  return productCat;
        }
    }

    findCategory(){
        const newProductossss=this.productos;
        for (const i in newProductossss) {
            const categoriaa= this.category.find(item=>item.idCategory===newProductossss[i].categoriaId);
            const product=newProductossss[i];
                    newProductossss[i]={
                          ...product,
                          ...{categoriaId:categoriaa.categoriaId}
                      }
        }
        return newProductossss;
    }


    findIdefe(idCat, idProd){

        const index1= this.category.findIndex(item => item.idCategory===idCat);
        const index2= this.productos.findIndex(item => item.idP===idProd);
        if(index1===-1 || index2===-1){
            throw new Error('Product and Category whit the id not found');

        }else{
        
            const categoria = this.category.find(item => item.idCategory===idCat);
            const producto = this.productos.find(item => item.idP===idProd);
            if(producto.categoriaId===categoria.idCategory){

                    this.productox={
                        ...producto,
                        ...{categoriaId:categoria.categoriaId}
                    }

                return this.productox;
            }else{
                throw new Error('La categoria no le pertenece al producto');
            }
            
        }
    }


    create(data ){
        
        const newProduct={
            idP:'12x',
            ...data
        }
        this.productos.push(newProduct);
        return newProduct;

    }

    find(){
        //const name= this.getTotal();
        return this.productos;

    }

    findOne(id){
         const productoUno= this.productos.find(item => item.idP===id)
         return productoUno;
    }
    update(id, change){
        const index=this.productos.findIndex(item=>item.idP===id);
        if(index===-1){
            throw new Error('Product no founnd');
        }
        const product=this.productos[index];

        this.productos[index]={
            ...product,
            ...change
        }

        return this.productos[index];
    }

    delete(id){

        const index= this.productos.findIndex(item => item.idP===id);

        if(index===-1){
            
            throw new Error('Producto id no found... Id: '+ id);
        }

        this.productos.splice(index,1);

        return {id};

    }



}


module.exports= CategoryService;
