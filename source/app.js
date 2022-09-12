const express = require('express');
const bodyParser = require ('body-parser')
const app = express();


//seteao de ejs como motor de plantilla
// de esta forma le decimos a express quiero que internamente cree una variable de entorno
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
// de esta forma configuramos el bodyparse para que se use sus funciones
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./routes/products'));

//deje en 1.33.39

app.listen(8000, () => console.log("Servidor iniciado en puerto 8000"));