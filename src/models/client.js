import { DataTypes } from "sequelize";
import sequelize from "../config/db.config"

export const Client = sequelize.define("Client", {
    id: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    date_birthday: DataTypes.DATE
});

(async () => {
    await sequelize.sync({ force: true }).then(result => console.log(result))
        .catch(err => console.log(err));
})();