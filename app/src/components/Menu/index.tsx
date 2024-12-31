import { FlatList, TouchableOpacity } from "react-native";

import { products } from "../../mocks/products";
import { Text } from "../Text";
import { Product, ProductImage, ProductDetails, Separator, AddToCartButton } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={(item) => item._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => (
        <Product>
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
          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
}
