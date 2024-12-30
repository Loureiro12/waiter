import React from "react";

import { Category, Icon } from "./styles";
import { categories } from "../../mocks/categories";
import { Text } from "../Text";
import { FlatList } from "react-native";

export function Categories() {
 return (
  <FlatList
    data={categories}
    keyExtractor={(item) => item._id}
    renderItem={({ item }) => (
      <Category>
        <Icon>
          <Text>{item.icon}</Text>
        </Icon>
        <Text>{item.name}</Text>
      </Category>
    )}
    contentContainerStyle={{ paddingRight: 24 }}
    showsHorizontalScrollIndicator={false}
    horizontal
  />
 )
}
