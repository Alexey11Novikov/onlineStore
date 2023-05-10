import sequelize from "../config/db.config";

export const create = () => {

}

export const findAll = async () => {
    await sequelize.query("SELECT * FROM `client`").then(res => {
        console.log(res);
    })
}

export const deleteField = async()=>{

}
