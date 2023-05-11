import sequelize from "../config/db.config"
const { DataTypes } = require("sequelize");

export const Order = sequelize.define("order", {
    id: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    customerid: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
});

(async () => {
    await sequelize.sync().then(result => console.log(result))
        .catch(err => console.log(err));
})();
