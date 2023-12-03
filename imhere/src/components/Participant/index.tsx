import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type PropsParticipant = {
  name: string;
};

export function Participant({ name }: PropsParticipant) {
  return (
    <View style={styles.contianer}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
