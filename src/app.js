const express = require('express');

const exphbs = require('express-handlebars');

const app = express();

const path = require('path');

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
        extname: '.hbs',
        helpers:{

            // Utilizada por ambas vistas mobile para acortar los clubes
            trimString: function (passedString) {

                let words = passedString.split(" ");

                var theString = passedString;

                if(words.length >= 2){

                    switch(passedString){

                        case 'Argentinos Juniors':
                            theString = 'Argentinos J.';
                        break;

                        case 'San Lorenzo':
                            theString = 'San Lorenzo';
                        break;

                        case 'Godoy Cruz':
                            theString = 'Godoy C.';
                        break;

                        case 'Atlético Tucumán':                          
                            theString = 'At. Tucumán';
                        break;

                        case 'Central Córdoba SE':
                            theString = 'Central C.';
                        break;

                        default:
                            theString = passedString.substring(0,passedString.indexOf(" "));
                        break;
                    }
                }
                return theString;
            },

            // Utilizada por la vista mobile de goleadores
            addBar: function(passedString){
                return passedString + " - "
            }
        }
    }));

// Middlewears

// Global variables

// Routes

    //Indicamos donde se encuentra la carpeta del controlador de rutas
    app.use(require('./routes/index.routes'));

// Static

    // Indicamos donde se encuentra la carpeta /public
    app.use(express.static(__dirname + '/public'));

module.exports = app;