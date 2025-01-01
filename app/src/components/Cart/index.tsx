import { FlatList, TouchableOpacity } from "react-native";
import { Text } from "../Text";
import { CartItem } from "../../types/CartItem";
import {
  Actions,
  Image,
  Item,
  ProductContainer,
  ProductDetails,
  QuantityContainer,
} from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { MinusCircle } from "../Icons/MinusCircle";

import ImageMock from "../../assets/imagem-background.png";

interface CartProps {
  cartItems: CartItem[];
}

export function Cart({ cartItems }: CartProps) {
  return (
    <FlatList
      data={cartItems}
      keyExtractor={(item: CartItem) => item.product._id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Item>
          <ProductContainer>
            <Image
              source={
                item.product?.imagePath
                  ? {
                      uri: `http://192.168.100.72:8081/uploads/${item.product?.imagePath}`,
                    }
                  : ImageMock
              }
            />

            <QuantityContainer>
              <Text size={14} color="#666">
                {item.quantity}x
              </Text>
            </QuantityContainer>

            <ProductDetails>
              <Text size={14} weight="600">
                {item.product.name}
              </Text>
              <Text size={14} color="#666" style={{ marginTop: 4 }}>
                {formatCurrency(item.product.price)}
              </Text>
            </ProductDetails>
          </ProductContainer>
          <Actions>
            <TouchableOpacity style={{ marginRight: 24 }}>
              <PlusCircle />
            </TouchableOpacity>
            <TouchableOpacity>
              <MinusCircle />
            </TouchableOpacity>
          </Actions>
        </Item>
      )}
    />
  );
}
