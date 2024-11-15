import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones
import Home from '../screens/Home'; // Tela Home
import TabRoutes from './Tab.routes'; // Suas Tabs
import Lab from '../screens/Lab'; // Tela Laboratório
import Notifications from '../screens/Notifications'; // Tela de Notificações

const Drawer = createDrawerNavigator(); // Criando o Drawer Navigator

// Função principal do Drawer Navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home" // Define a tela inicial ao abrir o app
      screenOptions={{
        headerShown: false, // Esconde o cabeçalho
        drawerStyle: {
          backgroundColor: '#2C3E50', // Cor de fundo do Drawer
        },
        drawerLabelStyle: {
          fontSize: 18, // Tamanho da fonte do nome do item no Drawer
          color: '#ecf0f1', // Cor do texto
        },
        drawerActiveBackgroundColor: '#34495E', // Cor de fundo do item ativo
        drawerActiveTintColor: '#ecf0f1', // Cor do texto no item ativo
        drawerInactiveTintColor: '#bdc3c7', // Cor do texto no item inativo
      }}
    >
      {/* Tela Home com ícone */}
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} /> // Ícone para Home
          ),
        }}
      />

      {/* Tela Tabela com ícone */}
      <Drawer.Screen
        name="Tabela"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="grid-outline" size={24} color={color} /> // Ícone para Tabela
          ),
        }}
      />

      {/* Tela Laboratório com ícone */}
      <Drawer.Screen
        name="Laboratorio"
        component={Lab}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="flask-outline" size={24} color={color} /> // Ícone para Laboratório
          ),
        }}
      />

      {/* Tela de Notificações com ícone */}
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={24} color={color} /> // Ícone para Notificações
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Função principal para controlar a navegação
export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerNavigator /> {/* Apenas o DrawerNavigator é usado como a navegação principal */}
    </NavigationContainer>
  );
}
