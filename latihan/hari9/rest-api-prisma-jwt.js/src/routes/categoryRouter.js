const express = require("express");
const {
  createCategory,
  readCategory,
  readCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryControllers");
const { authJWT } = require("../middleware/auth");
const { basicAuth } = require("../middleware/basicAuth");
const routerCategory = express.Router();

routerCategory.post("/category", authJWT, createCategory);
routerCategory.get("/category", readCategory);
routerCategory.get("/category/:id", readCategoryById);
routerCategory.put("/category/:id", basicAuth, updateCategory);
routerCategory.delete("/category/:id", basicAuth, deleteCategory);
module.exports = routerCategory;
