const express = require('express');
const { renderUploadProductViews, renderSuccessProductCreated } = require('../controllers/product');
const router = express.Router();

//importacion de la logica que esta en el controllers
//ojo con los verbos
router.get('/cargar-producto', renderUploadProductViews);
// esto valida que si no me mandas el nombre o la logintud del nombre es menor que 5 
//digitos, va a retornar el stingg en rojo
// esto valida lo que queremos del precio
router.post('/cargar-producto-backend', (req, res, next) => {

    if(!req.body.product_name || req.body.product_name.length <5) {
        throw new Error("El producto no cumple las validaciones");
    }


    if(!req.body.product_price || req.body.product_price < 2) {
        throw new Error("El producto esta por debajo de 2 peso");
    }

    next();

},

    renderSuccessProductCreated
);

router.get('/middleware',
    (req, res, next) => {

        //todas nuestras validaciones en el Middleware
        //console.log(Date.now())

        return res.json ({
            "data": "hola que tal"
        })
  
    },
(req, res) => {

    return res.send('ruta middleware')

});

module.exports = router;