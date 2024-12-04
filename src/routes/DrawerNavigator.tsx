import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Animated, ScrollView, ScrollViewProps } from 'react-native';
import { DrawerNavigationState, NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home/Home';
import TabRoutes from './Tab.routes';
import Lab from '../screens/Laboratorio/Laboratorio';
import Ambiental from '../screens/Ambiental/Ambiental';
import { useFocusEffect } from '@react-navigation/native';
import { DrawerNavigationHelpers, DrawerDescriptorMap } from '@react-navigation/drawer/lib/typescript/commonjs/src/types';

const Loading = () => {
  const [rotation1] = useState(new Animated.Value(0));

  useEffect(() => {

    const rotate = (rotationValue: Animated.Value | Animated.ValueXY) => {
      return Animated.loop(
        Animated.timing(rotationValue, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        })
      );
    };

    rotate(rotation1).start();
  }, []);

  const interpolateRotation = (rotationValue: Animated.Value) => {
    return rotationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.ring,
            { borderBottomColor: 'rgb(52, 73, 94)' },
            { transform: [{ rotateZ: interpolateRotation(rotation1) }] },
          ]}
        />
        <Text style={styles.loadingText}>loading</Text>
      </View>
    </View>
  );
};

const Drawer = createDrawerNavigator();

// Custom Drawer Content
function CustomDrawerContent(props: (React.JSX.IntrinsicAttributes & ScrollViewProps & { children: React.ReactNode; } & React.RefAttributes<ScrollView>) | (React.JSX.IntrinsicAttributes & { state: DrawerNavigationState<ParamListBase>; navigation: DrawerNavigationHelpers; descriptors: DrawerDescriptorMap; })) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function DrawerNavigator() {
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }, [])
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#34495E',
        },
        drawerLabelStyle: {
          fontSize: 18,
          color: '#ecf0f1',
        },
        drawerActiveBackgroundColor: '#000000',
        drawerActiveTintColor: '#ecf0f1',
        drawerInactiveTintColor: '#ffffff',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tabela"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="grid-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Laboratorio"
        component={Lab}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="flask-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Gestão Ambiental"
        component={Ambiental}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="earth" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
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
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Definindo o fundo do loading
  },
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ring: {
    width: 190,
    height: 190,
    borderWidth: 8,
    borderRadius: 95, // Meio para torná-lo redondo
    position: 'absolute',
  },
  loadingText: {
    color: 'white', // Texto de carregamento em branco
    fontSize: 20,
  },
});

export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
