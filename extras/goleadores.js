const cheerio = require('cheerio');

const request = require('request');

const Goleadores = require('./models/Goleadores');

url = 'https://www.futbolargentino.com/primera-division/goleadores'

import('./app.js')  

const arreq = [];

request(url, (err, res, body) => {

    if (!err && res.statusCode == 200) {

        const $ = cheerio.load(body);

        const equipos = $('tbody tr');
        
        equipos.each((i, el) => {
            
            aux = [];

                const posicion = $(el).children('td').html();

                let jugador = $(el).children('td').next().html();
                
                jugador = jugador.substr(0,jugador.indexOf('<'));

                const src = $(el).children('td').next().children('a').children('img').attr('data-src');

                const club = $(el).children('td').next().next().next().children('a').children('span').html();

                //const club_responsive = $(el).children('td').next().children().children().children().text().trim();

                const puntos = $(el).children('td').next().next().next().next().text();

                aux.push(posicion,jugador,src,club,puntos);

                arreq.push(aux);

        });
    
        arreq.forEach(element => crear(element[0],element[1],element[2],element[3],element[4]));
        
    }
    //return arreq;
});



const crear = (pos,jug,imgPath,clb,pnts) => {
    const test = new Goleadores({posicion:pos,jugador:jug,imagePath:imgPath,club:clb,puntos:pnts});
    const res = test.save();
}


