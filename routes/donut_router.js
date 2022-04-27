const express = require('express');
const Donut_controller = require('../controllers/Donut_controller');
const router = express.Router();


router.get('/',Donut_controller.getAllDonuts);
router.get('/:id',Donut_controller.getDonutById);



module.exports =router;