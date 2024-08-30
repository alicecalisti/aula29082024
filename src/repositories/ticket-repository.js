const mongoose = require('mongoose');
const Ticket = mongoose.model('Ticket');

exports.get = async() => {
    const result = await Ticket.find({});
    return result;
}

exports.create = async(data) => {
    const ticket = Ticket(data)
    await ticket.save()
}
// exports.delete = async(id)=>{
//     await Ticket.findByIdAndUpdate(id, {
//         $set:
//         {
//             active: false
//         }
//     });
// } 

exports.getById = async(id)=>{
    const result = await Ticket.findOne({idTicket : id}, "idTicket titulo idPessoa telefone");

    return result;
}

exports.update = async(id, data) => {
    await Ticket.findByIdAndUpdate(id, {
        $set:{

            titulo: data.titulo,
            telefone: data.telefone,

        }
    })
}