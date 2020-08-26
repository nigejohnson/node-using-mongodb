import { addnewProduct,
     getProducts,
      getProductWithID,
       updateProduct,
        deleteProduct 
    } from '../controllers/controllers';

const routes = (app) => {
    app.route('/products')

        // Post endpoint
        .post(addnewProduct)

        //Get multiple products
        .get(getProducts);

    app.route('/products/:ProductID')
        // get a specific product with an ID
        .get(getProductWithID)

        // updating a specific product
        .put(updateProduct)

        //deleting a specific product
        .delete(deleteProduct);

}

export default routes;