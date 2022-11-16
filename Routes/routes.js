import express from "express";
import usuario from "./usuario.routes.js";
import estacionamento from "./estacionamento.routes.js";
import login from "./login.routes.js";
import carteira from './carteira.routes.js';

const router = express.Router()

router.use('/', login)
router.use('/estacionamento', estacionamento)
router.use('/usuario', usuario)
router.use('/carteira', carteira)

export default router;