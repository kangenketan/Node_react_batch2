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
