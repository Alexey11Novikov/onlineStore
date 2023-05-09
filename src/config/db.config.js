const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("store_online", "admin", "admin", {
    host: 'localhost',
    dialect: "postgres"
});

export default sequelize;