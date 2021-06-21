const router = require('express').Router();
const orderController = require('../controllers/ordersController');
const authenticate = require('../middleware/authenticate');
const admin = require('../middleware/admin')

//API CRUD ORDES

// See all orders
router.get('/', admin, async (req, res) => {
    try{
        res.json(await orderController.allOrders());
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})
// View orders by ID
router.get('/:id', authenticate, async (req, res) => {
    try{
        const id = req.params.id;
        res.json(await orderController.orderId(id));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})
// View orders the same user
router.post('/orderuserid', authenticate, async (req, res) => {
    try{
        const idUser = req.body.idUser;
        res.json(await orderController.userOrder(idUser));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})
// Create orders
router.post('/', authenticate, async (req, res) => {
    try{
        const body = req.body;
        res.json(await orderController.newOrder(body));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})
// Modify orders
router.put('/', authenticate, async (req, res) => {
    try {
        const cuerpoDeDatos = req.body;
        res.json(await orderController.modifyOrder(cuerpoDeDatos));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});
// Delete orders and users
router.delete('/:id', admin, async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await orderController.deleteOrder(id));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});
module.exports = router;