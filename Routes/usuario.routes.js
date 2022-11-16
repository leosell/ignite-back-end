import express from "express";
import Usuario from "../models/Usuario.js";
import verificarToken from "../config/auth.js";

const usuario = express.Router()

usuario.get('/', (req, res) => {
    const token = req.headers['token']
    const authData = verificarToken(token, res)
})

usuario.post('/register', async (req, res) => {
    const { nome, email, password } = req.body
    
    const verificandoUsuarioExistente = await Usuario.findOne({ where: { email } }).catch((error) => console.log(`Error: ${error}`))

    if (verificandoUsuarioExistente) {
        console.log(`Usuário já existente: ${verificandoUsuarioExistente}`)
        return res
            .status(400)
            .json({ message: 'E-mail já utilizado por outro usuário '})
    }

    const novoUsuario = new Usuario({ nome, email, password })
    const salvarUsuario = await novoUsuario.save().catch((error) => {
        console.log(`Error ${error}`)
        res
            .status(500)
            .json({ error: 'Não é possível cadastrar o usuário' })
    })

    if (salvarUsuario) {
        console.log(salvarUsuario)
        res
            .json({ message: 'Obrigado pelo cadastro!' })
    }

})

export default usuario;