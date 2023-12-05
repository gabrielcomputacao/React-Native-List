import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante Existe",
        "Já existe um participante na lista com esse nome"
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover participante", `Deseja remover participante ${name}`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* um componente que ja renderiza dados sem precisar de realizar o map  */}
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            status="delete"
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
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
