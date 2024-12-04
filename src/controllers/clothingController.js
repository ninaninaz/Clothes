const Clothing = require("../models/Clothing")

const createClothing = async (req, res) => {
    const { name, color, price, size } = req.body

    try {
        const newClothing = new Clothing ({name, color, price, size })
        const clothing = await newClothing.save()
        res.status(201).json(clothing)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
}

const getAllClothes = async (req, res) => {
    try {
        const clothes = await Clothing.find()
        if (clothes.length === 0)
            return res.status(404).json({ message: "No clothes found" })
        res.status(200).json(clothes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
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
            return res.status(404).json({ message: "Clothing is not found" })
        }
        res.status(200).json(updatedClothing)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server Error")
    }
}

const deleteClothing = async (req, res) => {
    const clothing_id = req.params.clothing_id

    try {
        const deletedClothing = await Clothing.findByIdAndDelete(clothing_id)
        if (!deletedClothing) {
            return res.status(404).json({ message: "Clothing is not found"})
        }
        res.status(200).json( {message: "Clothing has succesfully been deleted from database"})
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }

}

module.exports = { createClothing, getAllClothes, updateClothing, deleteClothing }