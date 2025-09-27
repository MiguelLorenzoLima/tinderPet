import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

// Algumas imagens de gatinhos da internet
const imagens = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQtZ2VqdAd2WVg92aWV8AyI6lBKMV6OYuRg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtiIH-8QCRJK5YAGssZFhDxAhhVrEncxwCQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3-hRvrNwCOYwNFSdN5Uwfu5XqqTKxLkxFA&s",
  "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/11/garfield-e1699892660803.jpg?w=820&h=461&crop=1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaQngHnGqU_V0nOrUO86AezOj2NjR0P624A&s",
];

export default function App() {
  // Estado para saber qual imagem mostrar
  const [index, setIndex] = useState(0);
  // Estado para a cor da borda (verde/vermelho)
  const [borda, setBorda] = useState("transparent");

  // Função quando o usuário clica em "Gostei"
  const gostei = () => {
    setBorda("green"); // muda para verde
    setTimeout(() => {
      trocarImagem();
    }, 1000); // espera 1 segundo antes de trocar
  };

  // Função quando o usuário clica em "Não Gostei"
  const naoGostei = () => {
    setBorda("red"); // muda para vermelho
    setTimeout(() => {
      trocarImagem();
    }, 1000);
  };

  // Troca a imagem para a próxima
  const trocarImagem = () => {
    setBorda("transparent"); // volta a borda normal
    setIndex((index + 1) % imagens.length); // pega próxima imagem
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Só os mais Gatões aqui!</Text>

      <Image
        source={{ uri: imagens[index] }}
        style={[styles.imagem, { borderColor: borda }]}
      />

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botaoNao} onPress={naoGostei}>
          <Text style={styles.textoBotao}>Não Gostei</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoSim} onPress={gostei}>
          <Text style={styles.textoBotao}>Gostei</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  imagem: {
    width: 300,
    height: 300,
    borderWidth: 5,
    borderRadius: 10,
    marginBottom: 20,
  },
  botoes: {
    flexDirection: "row",
    gap: 20,
  },
  botaoNao: {
    backgroundColor: "#ff4d4d",
    padding: 15,
    borderRadius: 10,
  },
  botaoSim: {
    backgroundColor: "#4caf50",
    padding: 15,
    borderRadius: 10,
  },
  textoBotao: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
