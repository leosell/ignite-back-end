import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import bodyParser from "body-parser";
import cors from "cors";

// Carregando o arquivo de configuração
dotenv.config({ path: './config/config.env' })

// Startando o servidor
const server = express()
const port = process.env.PORT || 5000
server.listen(
    port,
    console.log(`Servidor rodando em ${process.env.NODE_ENV} na porta ${port}...`)
)

// Definindo minhas principais rotas
server.use(cors())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(router)