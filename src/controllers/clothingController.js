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

module.exports = { createClothing }