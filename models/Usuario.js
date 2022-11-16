import Sequelize from "sequelize";
import conectando from "../config/chaves_db.js";
import bcrypt from "bcrypt";

const Usuario = conectando.define(
    'usuario',
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

        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validator: {
                isEmail: true
            },
            unique: true
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        admin: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        }
    },

    {
        hooks: {
            beforeCreate: async (Usuario) => {
                if (Usuario.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a')
                    Usuario.password = bcrypt.hashSync(Usuario.password, salt)
                }
            },

            beforeUpdate: async (Usuario) => {
                if (Usuario.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a')
                    Usuario.password = bcrypt.hashSync(Usuario.password, salt)
                }
            }
        }
    }
)

export default Usuario;