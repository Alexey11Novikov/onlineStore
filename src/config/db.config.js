const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("store_online", "postgres", "admin", {
    host: 'localhost',
    dialect: "postgres",
    define: {timestamps: false}
});

module.exports = sequelize;