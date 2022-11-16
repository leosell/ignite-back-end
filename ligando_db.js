import conectando from "./config/chaves_db.js";
import Usuario from "./models/Usuario.js";
import Estacionamento from "./models/Estacionamento.js";
import Carteira from "./models/Carteira.js";

const ligando_db = async () => {
    try {
        const resultado = await conectando.sync()
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}

ligando_db();