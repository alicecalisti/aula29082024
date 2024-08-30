const respository = require('../repositories/registro-repository');

exports.get = async(req, res, next) => {
    const data = await respository.get();
    return res.status(200).send(data);
}

exports.post = async(req, res) => {
    await respository.create(req.body)
    res.status(201).send({mensagem : "Criado com sucesso"});
    console.log("chegou?")
}

exports.put = async(req, res) => {
    const id = req.params.id;

    await respository.update(id, req.body)
    res.status(204).send({mensagem: "Atualizado com sucesso"});
}