require('./database');

const cheerio = require('cheerio');

const request = require('request');

const Posiciones = require('./models/Posiciones');

url = 'https://www.futbolargentino.com/primera-division/tabla-de-posiciones'

const arreq = [];

request(url, (err, res, body) => {

    if (!err && res.statusCode == 200) {

        const $ = cheerio.load(body);

        const equipos = $('tbody tr');

        equipos.each((i, el) => {

            aux = []
            
            $(el).find('td').each((i, el) => {

                if (i == 1){ // Para evitar que guarde like: River PlateRiver, Defensa y JusticiaDefensa
                            // Y poder tomar el src de las imagenes
                aux.push($(el).children('a').children('span.d-none').html());

                aux.push($(el).children('a').children('img').attr('data-src'));

                }else{

                aux.push($(el).text().trim());

                }
            });

            arreq.push(aux);


        });

        //console.log(arreq);

        try{
            arreq.forEach(element => crear(element[0],element[1],element[2],element[3],element[4],element[5],element[6],element[7],element[8],element[9],element[10]));
        }catch(err){
            console.error(err);
        }

    } else{
        console.error(err);
    }
});

const crear =  (posicion,club,imagePath,pj,pg,pe,pp,gf,gc,dg,puntos) => {
    const test = new Posiciones({posicion:posicion,club:club,imagePath:imagePath,pj:pj,pg:pg,pe:pe,pp:pp,gf:gf,gc:gc,dg:dg,puntos:puntos});
    const res = test.save();
};