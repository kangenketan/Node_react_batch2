const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  let { email, name, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (user) {
    res.status(409).json({ message: "Usr already exists" });
  } else {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      await prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword,
        },
      });
      res.status(200).json({
        data: null,
        message: "User Successfuly created",
        status: "success",
      });
    } catch (err) {
      res.json({
        data: null,
        message: "User unsuccesfuly created",
        status: "Failed",
      });
    }
  }
};
const login = async (req, res) => {
  let { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user || (await bcrypt.compare(password, user.password))) {
    res.status(401).json({
      message: "Invalid credentials",
      status: "Invalid",
    });
    return;
  } else {
    const accessToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
    res.json(accessToken);
  }
};
module.exports = { register, login };
