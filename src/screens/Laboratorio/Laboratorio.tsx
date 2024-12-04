import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Laboratorio() {
  return (
    <ScrollView style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.title}>Cálculos Químicos</Text>
      <View style={styles.logoContainer}>
        {/* Substitua o caminho da imagem pelo caminho do seu logo */}
        <Image source={{ uri: 'https://media.giphy.com/media/d1X4oq3ZsBN28/giphy.gif' }} style={styles.logo} />
      </View>
      {/* Aqui você pode adicionar uma lista de cálculos em ordem alfabética */}
      <View style={styles.elementListContainer}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.cardImage} />
            <Text style={styles.element}>Cálculo 1</Text>
            <Text style={styles.calculation}>Detalhes do cálculo...</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.cardImage} />
            <Text style={styles.element}>Cálculo 2</Text>
            <Text style={styles.calculation}>Detalhes do cálculo...</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.cardImage} />
            <Text style={styles.element}>Cálculo 3</Text>
            <Text style={styles.calculation}>Detalhes do cálculo...</Text>
          </View>
        </View>
        {/* Adicione mais cálculos conforme necessário */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  elementListContainer: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#f8f9fa',
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
    color: '#333',
    flex: 1,
  },
  calculation: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
