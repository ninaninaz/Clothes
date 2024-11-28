const express = require("express")
const connectDB = require("./config/db")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5001

connectDB()

app.use(express.json())

app.use("/api/clothes", require("./routes/clothingRoutes"))

app.listen(PORT, () =>{
    console.log("Server listening on port: " + PORT)
})