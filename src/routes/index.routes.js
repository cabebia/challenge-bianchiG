const { Router } = require('express');

const Goleadores = require('../models/Goleadores')

const Posiciones = require('../models/Posiciones')

const router = Router();

    // Pagina principal que visita el usuario
    router.get('/', async (req,res) => {
        
        // Ordenamos registros por <posicion>
        const goleadores = await Goleadores.find().sort({posicion: 1}).lean();
        
        res.render('goleadores', { goleadores } );
    })


    // Ruta /posiciones
    router.get('/posiciones', async(req,res) => {
        
        // Ordenamos registros por <posicion>
        const posiciones = await Posiciones.find().sort({posicion: 1}).lean();
        
        res.render('posiciones', {posiciones} );
    })

    // Ruta /goleadores

    router.get('/goleadores', async (req,res) => {

        // Ordenamos objetos por <posicion>
        const goleadores = await Goleadores.find().sort({posicion: 1}).lean();
        
        res.render('goleadores', { goleadores } );
    })

module.exports = router;
