const Product = require('../models/product');
var productDao = {
    findAll,
    create,
    findById,
    deleteById,
    updateProduct
}

function findAll() {
    return Product.findAll();
}

function findById(id) {
    return Product.findByPk(id);
}

function deleteById(id) {
    return Product.destroy({ where: { id} });
}

function create(product) {
    var newProduct = new Product(product);
    return newProduct.save();
}

function updateProduct(product, id) {
    var updateProduct = {
        title: product.title,
        technologies: product.technologies,
        description: product.description,
        budget: product.budget,
        contact_email: product.contact_email
    };
    return Product.update(updateProduct, { where: { id} });
}
module.exports = productDao;