const { Router } = require('express');

const Goleadores = require('../models/Goleadores')

const Posiciones = require('../models/Posiciones')

const router = Router();

    // Pagina principal que visita el usuario
    router.get('/', async (req,res) => {
        const goleadores = await Goleadores.find().sort({posicion: 1}).lean();
        res.render('goleadores', { goleadores } );
    })

    router.get('/posiciones', async(req,res) => {
        const posiciones = await Posiciones.find().sort({posicion: 1}).lean();
        res.render('posiciones', {posiciones} );
    })

    router.get('/goleadores', async (req,res) => {
        const goleadores = await Goleadores.find().sort({posicion: 1}).lean();
        res.render('goleadores', { goleadores } );
    })

module.exports = router;
