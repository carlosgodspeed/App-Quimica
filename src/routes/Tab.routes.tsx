import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Sinalizacao from '../screens/Sinalizações/Sinalizacao'; 
import Tabelaquimica from '../screens/Tabela/Tabelaquimica'; 

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, 
        tabBarStyle: {
          backgroundColor: '#2C3E50', 
        },
        tabBarActiveTintColor: '#ecf0f1', 
        tabBarInactiveTintColor: '#ffffff', 
        tabBarLabelStyle: {
          fontSize: 14,
          color: '#ecf0f1', 
        },
      }}
    >
      <Tab.Screen
        name="Sinalização"
        component={Sinalizacao}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alert-circle-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tabela"
        component={Tabelaquimica}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" color={color} size={size} /> 
          ),
        }}
      />
    </Tab.Navigator>
  );
}
