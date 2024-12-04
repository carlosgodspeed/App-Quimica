import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Elementos from '../screens/Elementos/Elementos'; // Sua tela de Elementos
import Tabelaquimica from '../screens/Tabela/Tabelaquimica'; // Sua tela de Tabela

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Esconde o cabeçalho
        tabBarStyle: {
          backgroundColor: '#2C3E50', // Cor de fundo da barra de navegação
        },
        tabBarActiveTintColor: '#ecf0f1', // Cor do ícone ativo
        tabBarInactiveTintColor: '#ffffff', // Cor do ícone inativo
        tabBarLabelStyle: {
          fontSize: 14, // Tamanho da fonte do label
          color: '#ecf0f1', // Cor do texto do label
        },
      }}
    >
      <Tab.Screen
        name="Elementos"
        component={Elementos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-electron" color={color} size={size} /> // Ícone para Elementos
          ),
        }}
      />
      <Tab.Screen
        name="Tabela"
        component={Tabelaquimica}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" color={color} size={size} /> // Ícone para Tabela
          ),
        }}
      />
    </Tab.Navigator>
  );
}
