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

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = React.useState(false);
  const [selectedTable, setSelectedTable] = React.useState("");
  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    {
      quantity: 1,
      product: products[0],
    },
    {
      quantity: 2,
      product: products[1],
    }
  ]);

  function handleSaveTable(table: string) {
    console.log(table);
    setSelectedTable(table);
    setIsTableModalVisible(false);
  }

  function handleCancelOrder() {
    setSelectedTable("");
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
          <Menu />
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
            <Cart cartItems={cartItems}/>
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
