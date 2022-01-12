const { Schema, model } = require('mongoose');

const GoleadoresSchema = new Schema({
    posicion : { type: Number, require: true },
    jugador : { type: String, require:true },
    imagePath : { type: String, require: true },
    club : { type: String, require: true },
    puntos : { type: Number, require: true}
})

module.exports = model('goleadores', GoleadoresSchema);