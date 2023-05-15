const Customer = require("../models/customer");
const sequelize = require("../config/db.config");

const create = async (req, res) => {
  try {
    const user = await Customer.create(req.body);
    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};

const findAll = async (req, res) => {
  try {
    const row = await sequelize.query("SELECT * FROM customers");
    if(row) {
      return res.status(200).json({ row });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const deleteRow = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Customer.destroy({
      where: { id: id }
    });
    if (deleted) {
      return res.status(204).send("Customer deleted");
    }
    throw new Error("Customer not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateRow = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Customer.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedCustomer = await Customer.findOne({ where: { id: id } });
      return res.status(200).json({ user: updatedCustomer });
    }
    throw new Error('Customer not found');
  }
  catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { updateRow, deleteRow, findAll, create }