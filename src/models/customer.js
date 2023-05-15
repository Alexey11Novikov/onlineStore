const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Customer = sequelize.define("customer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  age: DataTypes.INTEGER,
  name: DataTypes.TEXT,
  email: DataTypes.TEXT,
  date_birthday: DataTypes.DATE,
});

(async () => {
  await sequelize
    .sync()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
})();

module.exports = Customer;
