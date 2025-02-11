import { Request, Response } from "express";
import { Order } from "../../models/Order";
import { io } from "../../..";

export async function createOrders(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    const order = await Order.create({
      table,
      products,
    });

    const orderDetails = await order.populate('products.product');
    io.emit("orders@new", orderDetails);

    res.status(201).json(order);
  } catch {
    res.status(500).json({ error: "Internal server error!" });
  }
}
