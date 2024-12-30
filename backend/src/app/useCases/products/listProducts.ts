import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function listProducts(req: Request, res: Response) {
  try {
    const produts = await Product.find();

    res.json(produts);
  } catch {
    res.status(500).json({ error: "Internal server error!" });
  }
}
