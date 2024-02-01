import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../../database.js";

const User = sequelize.define('users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUID,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });


export { User };