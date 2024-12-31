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

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer >
          <Menu />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterConteiner>
          <Button>Novo Pedido</Button>
        </FooterConteiner>
      </Footer>
    </>
  );
}
