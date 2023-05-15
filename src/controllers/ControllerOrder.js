const Order = require("../models/order");
const sequelize = require("../config/db.config");

const createOrder = async (req, res) => {
  try {
    const order = Order.create(req.body);
    return res.status(201).json({
      order,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};

const findAll = async (req, res) => {
  try {
    const row = await sequelize.query("SELECT * FROM orders");
    return res.status(200).json({ row });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteRow = async (req, res) => {
  try {
    const { id } = req.params;
        const deleted = await Order.destroy({
            where: { id: id }
        });
    if (deleted) {
      return res.status(204).send("Order deleted");
    }
    throw new Error("Order not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateRow = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Order.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedOrder = await Order.findOne({ where: { id: id } });
      return res.status(200).json({ rowNew: updatedOrder });
    }
    throw new Error('Order not found');
  }
  catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { updateRow, deleteRow, findAll, createOrder }
