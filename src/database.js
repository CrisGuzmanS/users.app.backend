import { Sequelize } from "sequelize"

const sequelize = new Sequelize(
    'users_backend_app',
    'admin',
    '34refcdgertre654eff4t4fds',
    {
        host: 'localhost',
        dialect: 'mysql'
    })

export { sequelize };