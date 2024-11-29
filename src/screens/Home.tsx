import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';

export default function Home() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')} // Substitua pelo caminho correto do seu logo
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        Bem-vindo ao App de Química
      </Animated.Text>
      <Text style={styles.subtitle}>
        Explore os principais recursos do app:
      </Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>🔬 Tabela Periódica Interativa</Text>
        <Text></Text>
        <Text style={styles.listItem}>⚗️ Informações Sobre Elementos Químicos</Text>
        <Text></Text>
        <Text style={styles.listItem}>🌱 Conteúdos Sobre Gestão Ambiental</Text>
        <Text></Text>
        <Text style={styles.listItem}>🧪 Recursos Para Práticas de Laboratórios</Text>
      </View>
      <Text style={styles.footerText}>
       Deslize a tela para começar
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  logo: {
    width: 220,
    height: 220,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34495E', // Cor estática como fundo
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    color: '#bbbbbb',
    textAlign: 'center',
    marginBottom: 10,
  },
  listContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
  listItem: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  footerText: {
    fontSize: 16,
    color: '#bbbbbb',
    marginTop: 20,
    textAlign: 'center',
  },
});
