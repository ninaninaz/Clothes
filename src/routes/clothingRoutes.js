const express = require("express")
const router = express.Router()
const { createClothing, getAllClothes, updateClothing, deleteClothing } = require ("../controllers/clothingController")


router.post("/", createClothing)

router.get("/", getAllClothes)

router.put("/:clothing_id", updateClothing )

router.delete("/:clothing_id", deleteClothing)

module.exports = router 
