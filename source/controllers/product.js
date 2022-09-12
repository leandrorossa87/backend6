

const renderUploadProductViews = (req, res) => {

    console.log(req.body.product_price);

    return res.render('products');
};

const renderSuccessProductCreated = (res, req) => {
  //como obtener los datos que van por la peticion
    const name = req.body.product_name;
    const price = req.body.product_price;
    
    return res.render('product-created', name, price);

};

module.exports = {
    renderUploadProductViews,
    renderSuccessProductCreated
};