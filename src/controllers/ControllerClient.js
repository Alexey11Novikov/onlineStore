import { Customer } from "../models/customer";
import sequelize from "../config/db.config";

export const create = (name, age, email, date_birthday) => {
  Customer.create({
    name: name,
    age: age,
    email: email,
    date_birthday: date_birthday,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const findAll = async () => {
  await sequelize.query("SELECT * FROM `Customers`").then((res) => {
    console.log(res);
  });
};

export const findRow = async (id) => {
  Customer.findByPk(id)
    .then((row) => {
      if (!row) return; // если пользователь не найден
      console.log(row.name);
    })
    .catch((err) => console.log(err));
};

export const deleteRow = async (id) => {
  Customer.destroy({
    where: {
      id: id,
    },
  }).then((res) => {
    console.log(res);
  });
};

export const updateRow = async () => {
  Customer.update(
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
