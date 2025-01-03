import { FlatList } from "react-native";

import { Text } from "../Text";
import {
  ProductContainer,
  ProductImage,
  ProductDetails,
  Separator,
  AddToCartButton,
} from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import React from "react";
import { Product } from "../../types/Product";

interface MenuProps {
  onAddToCart: (product: Product) => void;
  products: Product[];
}

export function Menu({onAddToCart, products}: MenuProps) {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<null | Product>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }
  return (
    <>
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <ProductContainer onPress={() => handleOpenModal(item)}>
            <ProductImage
              source={{
                uri: `http://192.168.100.72:8081/uploads/${item.imagePath}`,
              }}
            />
            <ProductDetails>
              <Text weight="600">{item.name}</Text>
              <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                {item.description}
              </Text>
              <Text size={14} weight="600">
                {formatCurrency(item.price)}
              </Text>
            </ProductDetails>
            <AddToCartButton onPress={() => onAddToCart(item)}>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
    </>
  );
}
