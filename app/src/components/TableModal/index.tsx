import { Modal, Platform } from "react-native";
import { ModalBody, Overlay, Header, Form, Input } from "./styles";
import { Text } from "../Text";
import { TouchableOpacity } from "react-native";
import { Close } from "../Icons/Close";
import { Button } from "../Button";
import { useState } from "react";

interface TableModalProps {
  visable: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visable, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState("");

  function handleSaveTable(table: string) {
    setTable("");
    onSave(table);
    onClose();
  }

  return (
    <Modal transparent visible={visable} animationType="fade">
      <Overlay behavior={Platform.OS === "ios" ? "padding" : "height"} enabled>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="numeric"
              onChangeText={setTable}
            />

            <Button
              disabled={table.length === 0}
              onPress={() => handleSaveTable(table)}
            >
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
