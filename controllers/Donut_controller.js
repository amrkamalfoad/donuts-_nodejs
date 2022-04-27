const Donut = require('../models/Donut_model');
const mongoose = require('mongoose');


const getAllDonuts = async (req,res)=>{
    const donuts = await Donut.find().sort('name');
    res.send(donuts);
};



const getDonutById = async (req,res)=>{
    const donut = await Donut.findById(req.params.id);
    if(!donut) return res.status(404).send("Not Found");
    res.send(donut);
};

module.exports={
    getAllDonuts,
    getDonutById,}