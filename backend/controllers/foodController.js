const Food = require('../models/foodModel');
const mongoose = require('mongoose');

//get all foods
const getFoods = async (req, res) => {
    const foods = await Food.find({}).sort({createdAt: -1});
    res.status(200).json(foods);
}

//get one food
const getOneFood = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: 'Food not found'});
    }
    const food = await Food.findById(id);

    if (!food) {
        return res.status(404).json({message: 'Food not found'});
    }
    res.status(200).json(food);
}
//create food
const createFood = async (req, res) => {
    const {name, calories, type} = req.body;
    
    try {
        const food = await Food.create({name, calories, type});
        res.status(201).json(food);
    } catch (error) {
        res.status(400).json({message: 'Food not created'});
    }
}


//delete food

const deleteFood = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: 'Food not found'});
    }
    await Food.findOneAndDelete(id);
    res.status(200).json({message: 'Food deleted successfully'});
    
    const food = await Food.findOneAndDelete({_id:id});
    if (!food) {
        return res.status(404).json({message: 'Food not found'});
    }
    res.status(200).json(food);


}

//update food
const updateFood = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: 'Food not found'});
    }
    await Food.findByIdAndDelete(id);
    res.status(200).json({message: 'Food deleted successfully'});
    
    
    const food = await Food.findByIdAndUpdate({_id:id}, req.body, {new:true});

    if(!food){
        return res.status(404).json({message: 'Food not found'});
    }
    res.status(200).json(food);
} 


module.exports = {
    getFoods,
    getOneFood,
    createFood,
    deleteFood,
    updateFood

}