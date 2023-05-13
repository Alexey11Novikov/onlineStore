const express = require('express')
const ClientController = require('../controllers/ControllerClient')
const OrderController = require('../controllers/ControllerOrder')
const router = express.Router();

//Client 
router.get('/getCustomer', ClientController.findAll);
router.post('/createCustomer', ClientController.create);
router.patch('/updateCustomer/:id', ClientController.update);
router.delete('/deleteCustomer/:id', ClientController.destroy);


//Order
router.get('/getOrder', OrderController.findAll);
router.post('/createOrder', OrderController.create);
router.patch('/updateOrder/:id', OrderController.update);
router.delete('/deleteOrder/:id', OrderController.destroy);
module.exports = router