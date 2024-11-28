const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDB