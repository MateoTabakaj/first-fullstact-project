
const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/product', ProductController.getAllProduct);
    app.get('/api/product/:id', ProductController.getProduct);
    app.post('/api/product', ProductController.createNewProduct);
    app.patch('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}
