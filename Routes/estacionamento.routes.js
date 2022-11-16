import express from "express";
import Estacionamento from "../models/Estacionamento.js";

const estacionamento = express.Router()

estacionamento.get('/', async (req, res) => {
    const estacionamentos = await Estacionamento.findAll().catch((error) => console.log(error))

    if (estacionamentos) {
        return res
            .json({estacionamentos})
    } else {
        return null
    }
})

estacionamento.post('/register', async (req, res) => {
    const { nome, cnpj, endereco, numero, bairro, cidade, estado, funcionamento } = req.body

    const verificandoEstacionamentoExistente = await Estacionamento.findOne({ where: { cnpj } }).catch((error) => console.log(error))

    if (verificandoEstacionamentoExistente) {
        return res
            .status(400)
            .json({ message: 'Estacionamento já cadastrado!' })
    }

    const novoEstacionamento = new Estacionamento({ nome, cnpj, endereco, numero, bairro, cidade, estado, funcionamento})
    const salvarEstacionamento = await novoEstacionamento.save().catch((error) => {
        console.log(error)
        res
            .status(500)
            .json({ error: 'Não foi possivel registrar o estacionamento!' })
    })

    if (salvarEstacionamento) {
        res
            .status(200)
            .json({ message: 'Estacionamento salvo com sucesso!' })
    }
})

export default estacionamento;