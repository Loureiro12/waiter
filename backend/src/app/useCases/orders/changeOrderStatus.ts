import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    console.log(status);
    console.log(orderId);

    if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
       res.status(400).json({ error: "Invalid status!" });
       return
    }

    await Order.findByIdAndUpdate(orderId, { status });


    res.status(204).json();
  } catch {
    res.status(500).json({ error: "Internal server error!" });
  }
}
