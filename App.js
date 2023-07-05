import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [nome, setNome] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [raca, setRaca] = useState("");
  const [brinquedo, setBrinquedo] = useState("");

  return (
    <ScrollView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
      }}
    >
      <CustomComp
        label="Email"
        placeholder="Digite o seu email"
        value={email}
        onChangeText={setEmail}
      />
      <CustomComp
        label="Senha"
        placeholder="Digite a senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      <CustomComp
        label="Confirmar Senha"
        placeholder="Digite a senha novamente"
        value={confSenha}
        onChangeText={setConfSenha}
        secureTextEntry={true}
      />
      <CustomComp
        label="Nome"
        placeholder="Digite o nome"
        value={nome}
        onChangeText={setNome}
      />
      <CustomComp
        label="Data de nascimento"
        placeholder="Digite a data de nascimento"
        value={dataNasc}
        onChangeText={setDataNasc}
      />
      <CustomComp
        label="Raca"
        placeholder="Digite a raca"
        value={raca}
        onChangeText={setRaca}
      />
      <CustomComp
        label="Brinquedo Favorito"
        placeholder="Digite o brinquedo"
        value={brinquedo}
        onChangeText={setBrinquedo}
      />
    </ScrollView>
  );
}

function CustomComp(props) {
  const { label, placeholder, value, onChangeText, secureTextEntry } = props;
  return (
    <View style={{ padding: 14 }}>
      <Text style={{ padding: 4 }}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={{ padding: 4 }}
      />
    </View>
  );
}
export default App;
