import { addnewProduct, getProducts, getProductWithID } from '../controllers/controllers';

const routes = (app) => {
    app.route('/products')

        // Post endpoint
        .post(addnewProduct)

        //Get multiple products
        .get(getProducts);

    app.route('/products/:ProductID')
        // get a specific product with an ID
        .get(getProductWithID);

}

export default routes;