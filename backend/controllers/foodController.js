const Food = require('../models/foodModel');
const mongoose = require('mongoose');


//get all foods
const getFoods = async (req, res) => {
    const foods = await Food.find({}).sort({createdAt: -1});
    res.status(200).json(foods);
}

//get a single food
const getOneFood = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: 'Food not found'});
    }

    const food = await Food.findById(id);

    if (!food) {
        return res.status(404).json({error: 'Food not found'});
    }
    res.status(200).json(food);
}
//post a new food item
const createFood = async (req, res) => {
    const {name, calories, type} = req.body;
    
    //add doc to db
    try {
        const food = await Food.create({name, calories, type});
        res.status(200).json(food);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


//delete food item

const deleteFood = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: 'Food not found'});
    }
    const food = await Food.findOneAndDelete({_id:id});
    if (!food){
        return res.status(404).json({error: 'food not fodun'})  
    }

    res.status(200).json(food);

}

//update food
const updateFood = async (req, res) => {
    const {id} = req.params;
    const {name, calories, type} = req.body;   

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: 'Food not found'});
    }
    
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