import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type PropsParticipant = {
  name: string;
  onRemove: () => void;
  status: "add" | "delete";
};

export function Participant({ name, onRemove, status }: PropsParticipant) {
  return (
    <View style={styles.contianer}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>{status === "add" ? "+" : "-"}</Text>
      </TouchableOpacity>
    </View>
  );
}
