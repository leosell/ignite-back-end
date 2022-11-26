import Sequelize from "sequelize";
import conectando from "../config/chaves_db.js";
import Usuario from "./Usuario.js";

const Carteira = conectando.define(
    'carteira',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        idUsuario: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'usuarios',
                key: 'id'
            }
        },

        saldo: {
            type: Sequelize.FLOAT,
            allowNull: false
        },

        dataTranferencia: {
            type: Sequelize.DATE,
            allowNull: true
        }
    }

)

Carteira.belongsTo(Usuario, {
    foreignKey: 'idUsuario'
});

export default Carteira;