import { TouchableOpacityProps } from "react-native";
import { Text } from "../Text";
import { Container } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  disabled?: boolean;
}

export function Button({ children, disabled, ...rest }: ButtonProps) {
  return (
    <Container {...rest} disabled={disabled}>
      <Text color="#fff" weight="600">
        {children}
      </Text>
    </Container>
  );
}
