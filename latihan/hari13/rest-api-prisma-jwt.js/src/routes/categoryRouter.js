const express = require("express");
const {
  createCategory,
  readCategory,
  readCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryControllers");
const routerCategory = express.Router();

routerCategory.post("/category", createCategory);
routerCategory.get("/category", readCategory);
routerCategory.get("/category/:id", readCategoryById);
routerCategory.put("/category/:id", updateCategory);
routerCategory.delete("/category/:id", deleteCategory);
module.exports = routerCategory;
