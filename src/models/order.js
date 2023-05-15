const sequelize = require("../config/db.config");
const { DataTypes } = require("sequelize");

const Order = sequelize.define("order", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: DataTypes.TEXT,
    customerid: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
});

(async () => {
    await sequelize.sync().then(result => console.log(result))
        .catch(err => console.log(err));
})();

module.exports = Order;