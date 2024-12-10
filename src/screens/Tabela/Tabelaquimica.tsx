import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { GestureHandlerRootView, PinchGestureHandler } from 'react-native-gesture-handler';

// Obter a largura da tela
const { width, height } = Dimensions.get('window');

export default function TabelaQuimica() {
  const [scale, setScale] = useState(1); // Estado para controlar o zoom
  const [imageIndex, setImageIndex] = useState(0); // Estado para controlar qual tabela está sendo exibida

  const tabelas = [
    require('../../assets/tabela.jpg'), // Substitua pelo caminho correto da sua imagem
    require('../../assets/logo.png'), // Outra tabela como exemplo
    require('../../assets/app.png'), // Adicionando uma terceira tabela
  ];

  const handleZoom = (event) => {
    if (event.nativeEvent.scale) {
      setScale(event.nativeEvent.scale);
    }
  };

  const irParaTabelaEspecifica = (indice) => {
    setImageIndex(indice); // Define a tabela específica
  };

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.container}>
        {/* ScrollView para permitir o scroll da imagem */}
        <ScrollView
          contentContainerStyle={[
            styles.scrollViewContainer,
            { transform: [{ scale }] }, // Aplica o zoom à imagem
          ]}
          maximumZoomScale={3} // Limita o zoom máximo
          minimumZoomScale={1} // Limita o zoom mínimo
          showsHorizontalScrollIndicator={false} // Desativa a barra de rolagem horizontal
          showsVerticalScrollIndicator={false} // Desativa a barra de rolagem vertical
          pinchGestureEnabled={true} // Habilita o gesto de pinça para zoom
        >
          <Image
            source={tabelas[imageIndex]}
            style={styles.image}
            resizeMode="contain"
          />
        </ScrollView>

        <View style={styles.buttonContainer}>
          {/* Botão para cada tabela */}
          {tabelas.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                imageIndex === index && styles.activeButton, // Aplica o estilo ativo ao botão selecionado
              ]}
              onPress={() => irParaTabelaEspecifica(index)} // Define qual tabela será exibida
            >
              <Text style={styles.buttonText}>{`${index + 1}`}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Adiciona espaçamento interno
  },
  scrollViewContainer: {
    width: width * 0.9, // Define 90% da largura da tela para o ScrollView
    height: width * 1.8, // Mantém a proporção da imagem
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row', // Coloca os botões lado a lado
    position: 'absolute',
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgb(0, 0, 0)',
    height: 70,
    paddingHorizontal: 28,
    borderRadius: 28,
    justifyContent: 'center', // Centraliza o texto verticalmente
    alignItems: 'center', // Centraliza o texto horizontalmente
    marginHorizontal: 5, // Espaçamento entre os botões
  },
  activeButton: {
    backgroundColor: 'green', // Fundo verde para o botão ativo
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
