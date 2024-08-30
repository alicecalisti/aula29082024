const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheme = new Schema({

    ticket: {
        type: Schema.Types.ObjectId,
        ref: 'Ticket'

    },
    conversa:{
        type: String,
    },
    idAtendente:{
        type: String,
    },
    motivo: {
        type: String,
    }
})
module.exports = mongoose.model('Registro', scheme)