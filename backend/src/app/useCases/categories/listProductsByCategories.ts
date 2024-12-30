import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function listProductsByCategories(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    const produts = await Product.find().where("category").equals(categoryId);

    res.json(produts);
  } catch {
    res.status(500).json({ error: "Internal server error!" });
  }
}
