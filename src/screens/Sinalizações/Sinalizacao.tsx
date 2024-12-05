import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';

export default function Sinalizacao() {

  return (
    <ScrollView style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.title}>Sinalizações</Text>
      <View style={styles.logoContainer}>
        <Text></Text>
      </View>
      <View style={styles.signContainer}>
  <Text style={styles.signTitle}>Sinalizações de produtos Químicos</Text>
  <View style={styles.imageRow}>
    <Image 
      source={require('../../assets/logo.png')} 
      style={styles.signImage} 
      alt="Materiais Corrosivos - Use luvas de proteção." 
    />
    <Image 
      source={require('../../assets/logo.png')} 
      style={styles.signImage} 
      alt="Substâncias Inflamáveis - Mantenha longe de fontes de calor." 
    />
    <Image 
      source={require('../../assets/logo.png')} 
      style={styles.signImage} 
      alt="Material Radioativo - Respeite a área delimitada." 
    />
  </View>
  <View style={styles.imageRow}>
    <Image 
      source={require('../../assets/logo.png')} 
      style={styles.signImage} 
      alt="Proibido: Entrada sem autorização." 
    />
    <Image 
      source={require('../../assets/logo.png')} 
      style={styles.signImage} 
      alt="Lave as mãos após o manuseio de produtos químicos." 
    />
    <Image 
      source={require('../../assets/logo.png')} 
      style={styles.signImage} 
      alt="Não inale vapores tóxicos - Utilize máscara apropriada." 
    />
  </View>
</View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    padding: 16,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
  vidrariasContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  vidrariasTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  elementListContainer: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 16,
  },
  element: {
    fontSize: 18,
    color: '#ffffff',
    flex: 1,
  },
  expandedInfo: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ffffff',
  },
  calculation: {
    fontSize: 14,
    color: '#ffffff',
  },
  rulesContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#bbbbbb',
    borderRadius: 8,
  },
  rulesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  rule: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 8,
  },
  signContainer: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  signTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Espaçamento entre as imagens
    marginBottom: 16, // Espaço entre linhas de imagens
  },
  signImage: {
    width: 100, // Largura inicial da imagem
    height: 100, // Altura inicial da imagem
    resizeMode: 'contain', // Ajuste da imagem sem distorção
  },
  
});
