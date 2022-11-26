import Sequelize from "sequelize";
import conectando from "../config/chaves_db.js";

const Estacionamento = conectando.define(
    'estacionamento',

    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },

        cnpj: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validator: {
                isCnpj: true
            },
            unique: true
        },
        
        endereco: {
            type: Sequelize.STRING,
            allowNull: false
        },

        numero: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        bairro: {
            type: Sequelize.STRING,
            allowNull: false
        },

        cidade: {
            type: Sequelize.STRING,
            allowNull: false
        },

        estado: {
            type: Sequelize.STRING(2),
            allowNull: false
        },

        funcionamento: {
            type: Sequelize.STRING,
            allowNull: false
        },

        horario: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
)

export default Estacionamento;