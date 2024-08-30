const respository = require('../repositories/ticket-repository');

exports.get = async(req, res, next) => {
    try{
        const data = await respository.get();
        return res.status(200).send(data);
    }catch (error){
        return res.status(500).send({
            message : "Erro ao buscar ticket."
        })
    }
    
}

exports.post = async(req, res) => {
    await respository.create(req.body)
    res.status(201).send({mensagem : "Criado com sucesso"});
}

exports.put = async(req, res) => {
    const id = req.params.id;

    await respository.update(id, req.body)
    res.status(204).send({mensagem: "Atualizado com sucesso"});
}