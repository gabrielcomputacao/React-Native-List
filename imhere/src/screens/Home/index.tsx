import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Home() {
  function handleParticipantAdd() {
    console.log("clicou no botao");
  }

  return (
    <View style={styles.container}>
      <Text key={1} style={{ color: "#28c", fontSize: 48 }}>
        Hello , world !
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#6b6b6b"
          /* configura o teclado da pessoa para aquele tipo de campo */
          keyboardType="default"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
