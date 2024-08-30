const mongoose = require('mongoose');
const Registro = mongoose.model('Registro');
const Ticket = mongoose.model('Ticket'); 

exports.get = async() => {
    const result = await Registro.find();
    return result;
}

exports.create = async (data) => {
    try {
      // Verifica se o ID do Ticket foi fornecido
      if (!data.ticketId) {
        throw new Error('Ticket ID is required');
      }
  
      // Busca o Ticket pelo ID fornecido
      const ticket = await Ticket.findById(data.ticketId);
      
      // Verifica se o Ticket foi encontrado
      if (!ticket) {
        throw new Error('Ticket not found');
      }
  
      // Cria um novo Registro
      const registro = new Registro(data)  
      await registro.save();
  
    } catch (err) {
      // Trata erros e pode lançar ou logar conforme necessário
      throw new Error(`Error creating Registro: ${err.message}`);
    }
  };


// exports.create = async(data) => {
//     const registro = Registro(data)
//     await registro.save()
// }
// exports.delete = async(id)=>{
//     await Ticket.findByIdAndUpdate(id, {
//         $set:
//         {
//             active: false
//         }
//     });
// } 

exports.getById = async(id)=>{
    const result = await Registro.findOne({_id : id}, "ticket conversa idAtendente motivo");

    return result;
}

exports.update = async(id, data) => {
    await Registro.findByIdAndUpdate(id, {
        $set:{

            conversa: data.conversa,
            telefone: data.motivo,

        }
    })
}