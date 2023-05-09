import sequelize from "../config/db.config";


const users = await sequelize.query("SELECT * FROM `users`");