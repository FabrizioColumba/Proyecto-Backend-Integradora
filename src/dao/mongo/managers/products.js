import productsModel from "../models/products.js"

export default class ProductsManager{
    getProducts= ()=>{
        return productsModel.find().lean()
    }

    getProductById=(pid)=>{
        return productsModel.findById(pid)
    }
    
    createProducts=(products)=>{
        return productsModel.insertMany(products)
    }

    updateProduct=(pid, product)=>{
        return productsModel.findByIdAndUpdate(pid, {$set: product})
    }

    deleteProduct=(pid)=>{
        return productsModel.findByIdAndDelete(pid)
    }
}