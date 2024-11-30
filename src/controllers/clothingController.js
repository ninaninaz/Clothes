const Clothing = require("../models/Clothing")

const createClothing = async (req, res) => {
    const { name, color, price, size } = req.body

    try {
        const newClothing = new Clothing ({name, color, price, size })
        const clothing = await newClothing.save()
        res.status(201).json(clothing)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
}

const getAllClothes = async (req, res) => {
    try {
        const clothes = await Clothing.find()
        res.status(200).json(clothes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
}

const updateClothing = async (req, res)  => {
    const clothing_id = req.params.clothing_id
    const { price, size } = req.body 
    
    try {
        const updatedClothing = await Clothing.findByIdAndUpdate(
            clothing_id,
            { price, size },
            { new: true }
        )
        if (!updateClothing) {
            return res.status(404).json({ message: "Clothing not found" })
        }
        res.status(200).json(updatedClothing)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
}

module.exports = { createClothing, getAllClothes, updateClothing }