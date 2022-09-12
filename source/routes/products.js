const express = require('express');
const { renderUploadProductViews, renderSuccessProductCreated } = require('../controllers/product');
const router = express.Router();

//importacion de la logica que esta en el controllers
//ojo con los verbos
router.get('/cargar-producto', renderUploadProductViews);
router.post('/cargar-producto',renderSuccessProductCreated);


module.exports = router;