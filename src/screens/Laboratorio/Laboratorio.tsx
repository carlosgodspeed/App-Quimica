import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';

export default function Laboratorio() {
  const [expandedCard, setExpandedCard] = useState(null);

  // Dados das vidrarias com informações adicionais
  const cardsData = [
    {
      title: 'Cálculo 1',
      imageUri: 'https://via.placeholder.com/100',
      details: 'Detalhes adicionais sobre Cálculo 1: Informações importantes e exemplos de uso.',
    },
    {
      title: 'Cálculo 2',
      imageUri: 'https://via.placeholder.com/100',
      details: 'Detalhes adicionais sobre Cálculo 2: Explicação detalhada e aplicações práticas.',
    },
    {
      title: 'Cálculo 3',
      imageUri: 'https://via.placeholder.com/100',
      details: 'Detalhes adicionais sobre Cálculo 3: Descrição completa e dicas de uso.',
    },
    {
      title: 'Cálculo 4',
      imageUri: 'https://via.placeholder.com/100',
      details: 'Detalhes adicionais sobre Cálculo 3: Descrição completa e dicas de uso.',
    },
    {
      title: 'Cálculo 5',
      imageUri: 'https://via.placeholder.com/100',
      details: 'Detalhes adicionais sobre Cálculo 3: Descrição completa e dicas de uso.',
    },
    {
      title: 'Cálculo 6',
      imageUri: 'https://via.placeholder.com/100',
      details: 'Detalhes adicionais sobre Cálculo 3: Descrição completa e dicas de uso.',
    },
  ];

  const handleCardPress = (cardIndex) => {
    setExpandedCard((prev) => (prev === cardIndex ? null : cardIndex));
  };

  return (
    <ScrollView style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.title}>Dicas de Laboratorio</Text>
      <View style={styles.rulesContainer}>
        <Text style={styles.rulesTitle}>Regras do Laboratório</Text>
        <Text style={styles.rule}>1. Sempre use equipamentos de proteção individual (EPI).</Text>
        <Text style={styles.rule}>2. Mantenha a área de trabalho limpa e organizada.</Text>
        <Text style={styles.rule}>3. Descarte corretamente os resíduos químicos.</Text>
        <Text style={styles.rule}>4. Evite o uso de substâncias inflamáveis perto de fontes de calor.</Text>
        <Text style={styles.rule}>5. Siga as instruções dos experimentos cuidadosamente.</Text>
        <Text style={styles.rule}>6. Informe qualquer acidente imediatamente ao responsável.</Text>
      </View>
      <View style={styles.vidrariasContainer}>
       <Text style={styles.vidrariasTitle}>Vidrarias do Laboratório</Text>
      <View style={styles.imageGrid}>
        {cardsData.map((card, index) => (
      <TouchableOpacity key={index} onPress={() => handleCardPress(index)} style={styles.gridItem}>
        <Image source={{ uri: card.imageUri }} style={styles.gridImage} />
        <Text style={styles.gridText}>{card.title}</Text>
        {expandedCard === index && (
          <View style={styles.expandedInfo}>
            <Text style={styles.calculation}>{card.details}</Text>
          </View>
        )}
      </TouchableOpacity>
    ))}
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
    width: 150,
    height: 150,
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
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  gridItem: {
    width: '30%', // Largura de cada item (ajustável)
    marginBottom: 16, // Espaçamento entre as linhas
    alignItems: 'center',
  },
  gridImage: {
    width: '100%', // Largura ajustada ao container
    height: 100, // Altura da imagem (ajustável)
    resizeMode: 'contain',
    marginBottom: 8, // Espaço entre a imagem e o texto
  },
  gridText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#ffffff',
  },
  
});
