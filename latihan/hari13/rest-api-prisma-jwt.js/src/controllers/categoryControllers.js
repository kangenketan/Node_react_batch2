const { PrismaClient } = require("../../generated/prisma");
// import { PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

const createCategory = async (req, res) => {
  let { name } = req.body;
  try {
    const category = await prisma.category.create({
      data: { name },
    });
    res.json({
      data: name,
      message: "Category Name's was succesfully created",
      status: "succes",
    });
    return;
  } catch (err) {
    res.json({
      info: "null",
      message: "Category Name's was unsuccesfully created ",
      status: "unsuccess",
    });
  }
};

const readCategory = async (req, res) => {
  try {
    const category = await prisma.category.findMany();
    res.json({
      info: category,
      message: "Category Name's was succesfully fetch",
      status: "success",
    });
    return;
  } catch (err) {
    res.json({
      data: null,
      message: "Category Name's was unsuccesfully fetch",
      status: "Error",
    });
  }
};

const readCategoryById = async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  try {
    const category = await prisma.category.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (!category) {
      return res.json({
        message: "Category Name's was not Found",
        status: "error",
      });
    }

    res.json({
      info: movies,
      message: "Category Name's was succesfully Fetch",
      status: "Success",
    });
  } catch (err) {
    res.json({
      info: category,
      message: err.massage,
      status: "Error",
    });
  }
};

const updateCategory = async (req, res) => {
  let { name } = req.body;
  let { id } = req.params;
  try {
    const category = await prisma.category.update({
      where: { id: Number(id) },
      data: { name },
    });
    res.json({
      data: category,
      message: "ll",
      status: "success",
    });
  } catch (err) {
    res.json({
      info: null,
      message: "Category Name's was not found",
      status: "not found",
    });
    return;
  }
};

const deleteCategory = async (req, res) => {
  let { id } = req.params;
  try {
    const deleteCategory = await prisma.category.delete({
      where: { id: Number(id) },
    });
    res.json({
      info: category,
      message: "Category Name's was succesfully Deleted",
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

module.exports = {
  createCategory,
  readCategory,
  readCategoryById,
  updateCategory,
  deleteCategory,
};
