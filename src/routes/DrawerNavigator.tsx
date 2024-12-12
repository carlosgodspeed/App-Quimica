import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  ScrollView,
  TextInput,
} from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home/Home';
import Lab from '../screens/Laboratorio/Laboratorio';
import Ambiental from '../screens/Ambiental/Ambiental';
import Tabelaquimica from '../screens/Tabela/Tabelaquimica';

const Loading = () => {
  const [rotation] = useState(new Animated.Value(0));

  useEffect(() => {
    const rotate = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    );
    rotate.start();

    return () => rotate.stop(); // Cleanup animation
  }, []);

  const interpolateRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.loadingContainer}>
      <Animated.View
        style={[
          styles.loadingRing,
          { transform: [{ rotateZ: interpolateRotation }] },
        ]}
      />
      <Text style={styles.loadingText}>Carregando...</Text>
    </View>
  );
};

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
          accessibilityLabel="Logotipo do aplicativo"
        />
      </View>

      {/* Barra de pesquisa no Drawer */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={24} color="gray" />
        <TextInput
          placeholder="Pesquisar..."
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
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
      const timer = setTimeout(() => setLoading(false), 3000);

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
        drawerActiveBackgroundColor: '#2C3E50',
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
        name="Tabelas"
        component={Tabelaquimica}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="albums-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Laboratório"
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
            <Ionicons name="earth-outline" size={24} color={color} />
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  loadingRing: {
    width: 190,
    height: 190,
    borderWidth: 8,
    borderColor: '#34495E',
    borderRadius: 95,
    borderTopColor: 'transparent',
    position: 'absolute',
  },
  loadingText: {
    color: 'white',
    fontSize: 20,
    marginTop: 210,
  },
  searchBar: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    elevation: 3,
  },
  searchInput: {
    width: '90%',
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
