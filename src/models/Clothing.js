const mongoose = require("mongoose")

const ClothingSchema = new mongoose.Schema({
    name: { type: String },
    color: { type: String},
    price: { type: Number},
    size: { type: Array}
}, {timestamps: true })

module.exports = mongoose.model("Clothing", ClothingSchema)