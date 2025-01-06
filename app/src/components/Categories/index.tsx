import React from "react";

import { Category, Icon } from "./styles";
import { Text } from "../Text";
import { FlatList } from "react-native";

import { Category as CategoryType } from "../../types/Category";

interface CategoryProps {
  categories: CategoryType[];
  onSelectCategory: (categoryId: string) => void;
}

export function Categories({ categories, onSelectCategory }: CategoryProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  );

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? "" : categoryId;
    onSelectCategory(category);
    setSelectedCategory(category);

  }

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => {
        const isSelected = selectedCategory === item._id;
        return (
          <Category onPress={() => handleSelectCategory(item._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{item.icon}</Text>
            </Icon>
            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
              {item.name}
            </Text>
          </Category>
        );
      }}
      contentContainerStyle={{ paddingRight: 24 }}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
}
