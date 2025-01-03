import React from "react";
import { Header } from "../components/Header";
import {
  Container,
  CategoriesContainer,
  Footer,
  MenuContainer,
  FooterConteiner,
} from "./styles";
import { Categories } from "../components/Categories";
import { Button } from "../components/Button";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";
import { Cart } from "../components/Cart";
import { CartItem } from "../types/CartItem";
import { products } from "../mocks/products";
import { Product } from "../types/Product";

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = React.useState(false);
  const [selectedTable, setSelectedTable] = React.useState("");
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  function handleAddToCart(product: Product) {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (item) => item.product._id === product._id
      );

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: newCartItems[itemIndex].quantity + 1,
      };

      return newCartItems;
    });
  }

  function handleDrecrementCartItem(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (item) => item.product._id === product._id
      );

      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        const newCartItems = [...prevState];
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: newCartItems[itemIndex].quantity - 1,
      };

      return newCartItems;
    });
  }

  function handleSaveTable(table: string) {
    console.log(table);
    setSelectedTable(table);
    setIsTableModalVisible(false);
  }

  function handleCancelOrder() {
    setSelectedTable("");
    setCartItems([]);
  }

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu onAddToCart={handleAddToCart} />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterConteiner>
          {!selectedTable && (
            <Button onPress={() => setIsTableModalVisible(true)}>
              Novo Pedido
            </Button>
          )}

          {selectedTable && (
            <Cart cartItems={cartItems} onAdd={handleAddToCart}
              onDecrement={handleDrecrementCartItem}
            />
          )}
        </FooterConteiner>
      </Footer>

      <TableModal
        visable={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
