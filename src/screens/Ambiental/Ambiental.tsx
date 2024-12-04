import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Ambiental() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ambiental</Text>
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
    marginBottom: 20, 
  },
});
