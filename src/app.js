const express = require('express')

const exphbs = require('express-handlebars');

const app = express();

const path = require('path');

const Goleadores = require('./models/Goleadores');



// Initializations

// Setings
    // Ruta de vistas
    app.set('views', __dirname + '/views');

    // Registramos handlebars como motor de plantillas
    app.set('view engine', '.hbs');

    // HBS - HandleBars
    app.engine('.hbs', exphbs.engine({
        defaultLayout:'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        parcialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs'
    }));

// Middlewears

    // Pagina principal que visita el usuario
    app.get('/', async (req,res) => {
        const goleadores = await Goleadores.find();
        res.render('goleadores', {goleadores} );
    })

// Global variables

// Routes

// Static

app.use(express.static(__dirname + '/public'));

module.exports = app;