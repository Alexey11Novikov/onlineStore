const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Order = sequelize.define("order", {
    name: DataTypes.TEXT,
    customerid: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
});

(async () => {
    await sequelize
    .sync()
    .then(result => console.log(result))
    .catch(err => console.log(err));
})();

module.exports = Order;