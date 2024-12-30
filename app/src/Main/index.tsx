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

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer />
      </Container>
      <Footer>
        <FooterConteiner />
      </Footer>
    </>
  );
}
