const express = require('express')
const ClientController = require('../controllers/ControllerCustomer')
const OrderController = require('../controllers/ControllerOrder')
const router = express.Router();

//Client 
router.get('/getCustomer', ClientController.findAll);
router.post('/createCustomer', ClientController.createRow);
router.patch('/updateCustomer/:id', ClientController.updateRow);
router.delete('/deleteCustomer/:id', ClientController.deleteRow);


//Order
router.get('/getOrder', OrderController.findAll);
router.post('/createOrder', OrderController.createOrder);
router.patch('/updateOrder/:id', OrderController.updateRow);
router.delete('/deleteOrder/:id', OrderController.deleteRow);
module.exports = router