import express from 'express'
import Carteira from '../models/Carteira.js'

const carteira = express.Router()

carteira.get('/busca', async (req, res) => {
    const carteira = await Carteira.findAll().catch((error) => console.log(error))

    if (carteira) {
        return res
            .json({carteira})
    } else {
        return null
    }
})

carteira.post('/register', async (req, res) => {
    const { saldo, idUsuario } = req.body
    console.log(idUsuario)

    const novoSaldo = new Carteira({ saldo, idUsuario })
    const salvarSaldo = await novoSaldo.save({ where: { idUsuario } }).catch((error) => {
        console.log(error)
        res
            .status(500)
            .json({ error: 'Não foi possivel inserir seu saldo!' })
    })

    if (salvarSaldo) {
        res
            .status(200)
            .json({ message: 'Saldo salvo com sucesso!' })
    }
})

export default carteira