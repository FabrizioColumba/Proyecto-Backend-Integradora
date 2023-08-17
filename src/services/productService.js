import ProductsManager from "../dao/mongo/managers/products.js"

export default class ProductsServices{
    constructor(dao){
        this.dao= dao
    }

    getProducts= ()=>{
        return this.dao.getProducts()
    }
    getProductById=(pid)=>{
        return this.dao.getProductById(pid)
    }

    createProducts=(products)=>{
        return this.dao.createProducts(products)
    }

    updateProduct=(pid, product)=>{
        return this.dao.updateProduct(pid,product)
    }

    deleteProduct=(pid)=>{
        return this.dao.deleteProduct(pid)
    }
}