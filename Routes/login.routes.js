import express from "express";
import Usuario from "../models/Usuario.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = express.Router()

login.post('/', async (req, res) => {
    const { email, password } = req.body

    const verificarRegistro = await Usuario.findOne({ where: { email } }).catch((error) => console.log(`Error: ${error}`))
    
    if (!verificarRegistro) {
        return res
            .status(400)
            .json({ message: 'E-mail/Senha inválidos' })
    }

    if (!bcrypt.compareSync(password, verificarRegistro.password)) {
        return res
            .status(400)
            .json({ message: 'E-mail/Senha inválidos'})
    }

    const token = jwt.sign(
        {
            id: verificarRegistro.id,
            name: verificarRegistro.nome,
            admin: verificarRegistro.admin
        },
        
        process.env.CHAVE_CRIPTOGRAFICA,

        {
            expiresIn: '1h'
        }
    )

    res.json({
        message: 'Bem-vindo',
        token: token
    })
})

export default login;