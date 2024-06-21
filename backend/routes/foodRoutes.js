const express = require('express');
const router = express.Router();

const {
    getFoods,
    getOneFood,
    createFood,
    deleteFood,
    updateFood
} = require('../controllers/foodController');


//get all foods
router.get('/', getFoods);

//get one food
router.get('/:id', getOneFood);

//create food
router.post('/', createFood);

//delete food
router.delete('/:id', deleteFood);

//update food
router.patch('/:id', updateFood);

module.exports = router;