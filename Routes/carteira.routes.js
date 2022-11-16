import express from 'express'
import Carteira from '../models/Carteira.js'

const carteira = express.Router()

carteira.get('/', async (req, res) => {
    const saldo = await Carteira.findAll().catch((error) => console.log(error))

    if (saldo) {
        return res
            .json({saldo})
    } else {
        return null
    }
})

carteira.post('/register', async (req, res) => {
    const { saldo } = req.body

    const novoSaldo = new Carteira({ saldo })
    const salvarSaldo = await novoSaldo.save().catch((error) => {
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