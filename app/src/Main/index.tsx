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

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = React.useState(false);
  const [selectedTable, setSelectedTable] = React.useState("");

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
