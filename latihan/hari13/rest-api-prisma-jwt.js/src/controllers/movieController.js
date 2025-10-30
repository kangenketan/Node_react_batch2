const { PrismaClient } = require("../../generated/prisma");
// import { PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

const createMovie = async (req, res) => {
  let { title, year, categoryId } = req.body;
  try {
    const movies = await prisma.movies.create({
      data: { title, year, categoryId },
    });
    res.json({
      data: movies,
      message: "Movie was succesfully created",
      status: "succes",
    });
    return;
  } catch (err) {
    res.json({
      info: "null",
      message: "Movie was unsuccesfully created ",
      status: "unsuccess",
    });
  }
};

const readMovie = async (req, res) => {
  try {
    const { page } = req.query;
    let movies = await prisma.movies.findMany({
      include: {
        category: {
          select: { name: true },
        },
      },
    });

    if (page) {
      movies = await prisma.movies.findMany({
        skip: (page - 1) * 5,
        take: 5,
        include: {
          category: {
            select: { name: true },
          },
        },
      });
    }

    const count = await prisma.movies.count();
    movies = {
      total: count,
      movies: movies,
    };

    return res.status(200).json({
      status: "OK",
      info: movies,
    });
  } catch (err) {
    res.json({
      data: null,
      message: "Movie was unsuccesfully fetch",
      status: "Error",
    });
  }
};

const readMovieById = async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  try {
    const movies = await prisma.movies.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (!movies) {
      return res.json({
        message: "Movie was not Found",
        status: "error",
      });
    }

    res.json({
      info: movies,
      message: "Movie was succesfully Fetch",
      status: "Success",
    });
  } catch (err) {
    res.json({
      info: movies,
      message: err.massage,
      status: "Error",
    });
  }
};

const updateMovie = async (req, res) => {
  let { title, year, categoryId } = req.body;
  let { id } = req.params;
  try {
    const movies = await prisma.movies.update({
      where: { id: Number(id) },
      data: { title, year, categoryId },
    });
    res.json({
      data: movies,
      message: "null",
      status: "success",
    });
  } catch (err) {
    res.json({
      info: null,
      message: "Movie was not found",
      status: "not found",
    });
    return;
  }
};

const deleteMovie = async (req, res) => {
  let { id } = req.params;
  try {
    const deleteMovie = await prisma.movies.delete({
      where: { id: Number(id) },
    });
    res.json({
      info: deleteMovie,
      message: "Movie was succesfully Deleted",
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
  createMovie,
  readMovie,
  readMovieById,
  updateMovie,
  deleteMovie,
};
