import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { Text } from "../Text";
import { Container } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({ children, disabled, loading, ...rest }: ButtonProps) {
  return (
    <Container {...rest} disabled={disabled || loading}>
      {!loading ? (
        <Text color="#fff" weight="600">
          {children}
        </Text>
      ) : (
        <ActivityIndicator size="small" color="#fff" />
      )}
    </Container>
  );
}
