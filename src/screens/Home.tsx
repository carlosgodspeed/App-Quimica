import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimatedLoader from '../Components/AnimatedLoader'; // Importando o componente de animação

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Home</Text>
      <AnimatedLoader /> {/* Aqui está a animação */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,  // Espaçamento entre o título e a animação
  },
});
