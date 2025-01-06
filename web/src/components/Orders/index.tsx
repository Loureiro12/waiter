import { useEffect, useState } from "react";
import socketIo from "socket.io-client";

import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";
import { Order } from "../../types/Order";
import { api } from "../../utils/api";

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIo("http://localhost:3001", {
      transports: ["websocket"],
    });

    socket.on("orders@new", (order: Order) => {
      setOrders((prevOrders) => [...prevOrders, order]);
    });
  }, []);

  useEffect(() => {
    api.get("/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);

  const waiting = orders.filter((order) => order?.status === "WAITING");
  const inProduction = orders.filter(
    (order) => order?.status === "IN_PRODUCTION"
  );
  const done = orders.filter((order) => order?.status === "DONE");

  function handleCancelOrder(orderId: string) {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order._id !== orderId)
    );
  }

  function handleOrderStatusChange(
    orderId: string,
    newStatus: Order["status"]
  ) {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    );
  }

  return (
    <Container>
      <OrdersBoard
        icon="⏱️"
        title="Fila de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </Container>
  );
}
