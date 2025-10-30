const express = require("express");
const {
  getAllKetanProducts,
  createKetanProduct,
  readProductsbyId,
  updateKetanProduct,
  deleteKetanProduct,
  readCategory,
  createCategory,
  readCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/ketanControllers");
const router = express.Router();

// Import controller

// Route to get all Ketan products
router.get("/ketan-products", getAllKetanProducts);
router.post("/ketan-products", createKetanProduct);
router.get("/ketan-products/:id", readProductsbyId);
router.put("/ketan-products/:id", updateKetanProduct);
router.delete("/ketan-products/:id", deleteKetanProduct);
router.get("/category", readCategory);
router.post("/category", createCategory);
router.get("/category/:id", readCategoryById);
router.put("/category/:id", updateCategory);
router.delete("/category/:id", deleteCategory);
module.exports = router;
