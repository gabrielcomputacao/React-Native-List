import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
  const participants = ["gabriel", "tata", "melgaço", "pri"];

  function handleParticipantAdd() {
    console.log("clicou no botao");
  }

  return (
    <View style={styles.container}>
      <Text
        key={1}
        style={{
          color: "#FFF",
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 48,
        }}
      >
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>Domingo, 3 de Dezembro de 2023</Text>

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

      {/* um componente que ja renderiza dados sem precisar de realizar o map  */}
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Participant name={item} />}
        showsHorizontalScrollIndicator={false}
        /* renderiza caso nao tenho nenhum dado na lista */
        ListEmptyComponent={() => (
          <Text style={{ color: "#fff" }}>Não tem nada</Text>
        )}
      ></FlatList>

      {/*  <ScrollView>
        {participants.map((participant, index) => (
          <Participant key={index} name={participant} />
        ))}
      </ScrollView> */}
    </View>
  );
}
