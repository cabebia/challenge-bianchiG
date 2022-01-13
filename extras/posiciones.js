const cheerio = require('cheerio');
const request = require('request');

url = 'https://www.futbolargentino.com/primera-division/tabla-de-posiciones'

request(url, (err, res, body) => {

    if (!err && res.statusCode == 200) {

        const $ = cheerio.load(body);

        const equipos = $('tbody tr');

        const arreq = []

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

        console.log(arreq[0]);
    }
});