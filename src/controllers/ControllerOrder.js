import { Order } from "../models/order";
import sequelize from "../config/db.config";

export const create = (name, custumId, ) => {
  Order.create({
    name: name,
    customerid: custumId,

  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const findAll = async () => {
  await sequelize.query("SELECT * FROM `orders`").then((res) => {
    console.log(res);
  });
};

export const findRow = async (id) => {
  Order.findByPk(id)
    .then((row) => {
      if (!row) return; // если пользователь не найден
      console.log(row.name);
    })
    .catch((err) => console.log(err));
};

export const deleteRow = async (id) => {
  Order.destroy({
    where: {
      id: id,
    },
  }).then((res) => {
    console.log(res);
  });
};

export const updateRow = async () => {
  Order.update(
    { age: 36 },
    {
      where: {
        name: "Bob",
      },
    }
  ).then((res) => {
    console.log(res);
  });
};
