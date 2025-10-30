import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllKetanProducts = async (req, res) => {
  try {
    const ketanProducts = await prisma.kangenKetanProduct.findMany();
    res.status(200).json(ketanProducts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products", error });
    return res
      .status(500)
      .json({ error: "Error fetching products", status: error });
  }
};
export const createKetanProduct = async (req, res) => {
  const {
    sku,
    name,
    slug,
    description,
    price,
    stockQuantity,
    imageUrl,
    isActive,
    categoryId,
  } = req.body;
  try {
    const produkKetan = await prisma.kangenKetanProduct.create({
      data: {
        sku,
        name,
        slug,
        description,
        price,
        stockQuantity,
        imageUrl,
        isActive,
        categoryId,
      },
    });
    res.status(201).json({
      data: produkKetan,
      message: "Ketan product created successfully",
      status: "success",
    });
    // return;
  } catch (error) {
    res.status(500).json({
      data: null,
      message: "Failed to create Ketan product",
      status: "error",
    });
  }
};
export const readProductsbyId = async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  try {
    const ketanProducts = await prisma.kangenKetanProduct.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (!ketanProducts) {
      return res.json({
        message: "Ketan Product was not Found",
        status: "error",
      });
    } else {
      res.status(200).json(ketanProducts, "Ketan product fetched successfully");
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error fetching products", status: error });
  }
};
export const updateKetanProduct = async (req, res) => {
  let {
    sku,
    name,
    slug,
    description,
    price,
    stockQuantity,
    imageUrl,
    isActive,
    categoryId,
  } = req.body;
  let { id } = req.params;
  try {
    const ketanProducts = await prisma.kangenKetanProduct.update({
      where: { id: Number(id) },
      data: {
        sku,
        name,
        slug,
        description,
        price,
        stockQuantity,
        imageUrl,
        isActive,
        categoryId,
      },
    });
    res.json({
      data: ketanProducts,
      message: "null",
      status: "success",
    });
  } catch (err) {
    res.json({
      data: null,
      message: "Ketan product was unsuccesfully updated",
      status: "Error",
    });
    return;
  }
};
export const deleteKetanProduct = async (req, res) => {
  let { id } = req.params;
  try {
    const ketanProducts = await prisma.kangenKetanProduct.delete({
      where: { id: Number(id) },
    });
    res.json({
      info: ketanProducts,
      message: "Ketan product was succesfully Deleted",
      status: "success",
    });
  } catch (err) {
    res.json({
      info: null,
      message: err.message,
      status: "error",
    });
  }
};
export const readCategory = async (req, res) => {
  try {
    const category = await prisma.category.findMany();
    res.json({
      info: category,
      message: "Category Name's was succesfully fetch",
      status: "success",
    });
    // return;
  } catch (err) {
    res.json({
      data: null,
      message: "Category Name's was unsuccesfully fetch",
      status: "Error",
    });
  }
};
export const createCategory = async (req, res) => {
  let { name } = req.body;
  try {
    const category = await prisma.category.create({
      data: { name },
    });
    res.json({
      data: category,
      message: "Category created successfully",
      status: "success",
    });
    return;
  } catch (err) {
    res.json({
      info: "null",
      message: "Category creation failed",
      status: "error",
    });
  }
};
export const readCategoryById = async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  try {
    const category = await prisma.category.findFirst({
      where: { id: Number(id) },
    });
    if (!category) {
      return res.json({
        message: "Category Name's was not Found",
        status: "error",
      });
    }
    res.json({
      info: category,
      message: "Category was successfully fetched",
      status: "success",
    });
  } catch (err) {
    res.json({
      data: null,
      message: "Category Name's was unsuccesfully fetch",
      status: "Error",
    });
  }
};
export const updateCategory = async (req, res) => {
  let { name } = req.body;
  let { id } = req.params;
  try {
    const category = await prisma.category.update({
      where: { id: Number(id) },
      data: { name },
    });
    res.json({
      data: category,
      message: "null",
      status: "success",
    });
  } catch (err) {
    res.json({
      data: null,
      message: "Category was not found",
      status: "not found",
    });
  }
};
export const deleteCategory = async (req, res) => {
  let { id } = req.params;
  try {
    const category = await prisma.category.delete({
      where: { id: Number(id) },
    });
    res.json({
      info: category,
      message: "Category was succesfully Deleted",
      status: "success",
    });
  } catch (err) {
    res.json({
      info: null,
      message: err.message,
      status: "error",
    });
  }
};
