const express = require("express")
const router = express.Router()
const { createClothing } = require ("../controllers/clothingController")


router.post("/", createClothing)

module.exports = router 
