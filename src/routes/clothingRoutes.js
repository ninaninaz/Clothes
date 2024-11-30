const express = require("express")
const router = express.Router()
const { createClothing, getAllClothes, updateClothing} = require ("../controllers/clothingController")


router.post("/", createClothing)

router.get("/", getAllClothes)

router.put("/:clothing_id", updateClothing )

module.exports = router 
