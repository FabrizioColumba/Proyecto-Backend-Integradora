import BaseRouter from "./BaseRouter.js";
import productController from "../controllers/product.controller.js";


export default class ProductRouter extends BaseRouter {
    init(){

        this.get('/',["USER", "PREMIUM","ADMIN"],productController.getProducts)

        this.get('/:pid', ["PUBLIC"],productController.getProductById )

        this.post('/newproduct',["USER","PREMIUM"],productController.createProduct)

        this.put('/:pid',["ADMIN"],productController.updateProduct )

        this.delete('/deleteProduct/:pid',["ADMIN","PREMIUM"],productController.deleteProduct)


    }
}