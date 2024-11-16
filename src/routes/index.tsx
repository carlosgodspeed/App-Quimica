import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import TabRoutes from './Tab.routes';
import Lab from '../screens/Lab';
import Notifications from '../screens/Notifications';

const Drawer = createDrawerNavigator();

// Custom Drawer Content
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Logo acima dos itens do Drawer */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')} // Substitua pelo caminho correto do seu logo
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      {/* Itens do Drawer */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

// Função principal do Drawer Navigator
function DrawerNavigator() {
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
        name="Notifications"
        component={Notifications}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={24} color={color} />
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
});

export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
