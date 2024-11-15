import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const Loader = () => {
  // Valores de animação para os elétrons
  const electronAnim = useRef(new Animated.Value(0)).current;

  // Função para animar os elétrons
  const animateElectrons = () => {
    // Animação contínua dos elétrons
    Animated.loop(
      Animated.timing(electronAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    animateElectrons();
  }, []);

  // Estilos de órbitas elípticas para cada elétron
  const electron1Style = {
    transform: [
      {
        rotate: electronAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
      { translateX: -75 }, // Ajuste a distância para fora do centro
    ],
  };

  const electron2Style = {
    transform: [
      {
        rotate: electronAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['120deg', '480deg'], // 120 graus deslocado para órbita elíptica
        }),
      },
      { translateX: -75 },
    ],
  };

  const electron3Style = {
    transform: [
      {
        rotate: electronAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['240deg', '600deg'], // 240 graus para criar a última órbita elíptica
        }),
      },
      { translateX: -75 },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.nucleus} />
      {/* Elétrons com estilos distintos */}
      <Animated.View style={[styles.electron, styles.electron1, electron1Style]} />
      <Animated.View style={[styles.electron, styles.electron2, electron2Style]} />
      <Animated.View style={[styles.electron, styles.electron3, electron3Style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    overflow: 'hidden',
  },
  nucleus: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'cyan',
  },
  electron: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00ffff',
  },
  electron1: {
    backgroundColor: '#ff00ff',
  },
  electron2: {
    backgroundColor: '#00ff00',
  },
  electron3: {
    backgroundColor: '#ffff00',
  },
});

export default Loader;
