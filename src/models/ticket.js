const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheme = new Schema({
    idPessoa: {
        type: Number,
    },
    titulo:{
        type: String,
    },
    telefone:{
        type: String,
    },
    idTicket: {
        type: Number,
    }

})
module.exports = mongoose.model('Ticket', scheme)
