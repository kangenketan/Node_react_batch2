const express = require("express");
const { getAllKetanProducts } = require("../controllers/ketanControllers");
const router = express.Router();

// Import controller

// Route to get all Ketan products
router.get("/ketan-products", getAllKetanProducts);

module.exports = router;
