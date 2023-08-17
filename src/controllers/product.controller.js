import ProductsServices from "../services/productService.js"

const getProducts=async(req,res)=>{
    try{
        const products = await ProductsServices.getProducts()
        res.send({status: "success", payload:products})
    }
    catch(error){
        console.log('Error catch get products:', error)
    }
}
const getProductById= async(req,res)=>{
    try{
        const {pid} = req.params
        const product = await ProductsServices.getProductById(pid)
        res.send({status:'success', payload: product})
    }
    catch(error){
        console.log('Error catch get product:', error)
    }
}



const createProduct = async(req,res)=>{
    const useremail = req.user.email
    
    try{
       const {title, description,price,category,code,img}=req.body
        const product = {
            title,
            description,
            price,
            category,
            code,
            img,
            owner:useremail
        }
        
        if(!title || !description || !price || !category || !code || !img){
            return res.status(400).send({status: "error",error:"Incomplete values"});
        }
        
        const addProduct = await ProductsServices.createProduct(product)
        res.send({status:'success'}) 
        
    }
    catch(error){
       console.log('Error catch createProduct:', error)
    }
}

const deleteProduct=async(req,res)=>{
    const {pid} = req.params
    const deleteProduct = await ProductsServices.deleteProduct(pid)
    res.send({status:'success', message: 'Producto eliminado'})
}

const updateProduct=async(req,res)=>{
    try{
        const {pid} = req.params
        const {title, description,price,category,code,thumbnail}=req.body
        const product = {
            title,
            description,
            price,
            category,
            code,
            thumbnail
        }
        const updateProduct = await ProductsServices.updateProduct(pid,product)
        res.send({status:'success', message:`Se modificó ${product.description}`, payload:updateProduct})
    }
    catch(error) {
        req.logger.error('Error catch updateProduct:', error)
    }
}

export default{
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}