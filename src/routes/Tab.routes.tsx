import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather,Ionicons } from '@expo/vector-icons';
import Elementos from "../screens/Elementos";
import Tabelaquimica from "../screens/Tabelaquimica";
import Laboratorio from "../screens/Laboratorio";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Elementos"
            component={Elementos}
            options={{
              tabBarIcon: ({ color, size}) => <Ionicons name="logo-electron" color={'black'} size={size} />
            }}
          />  
          <Tab.Screen
            name="Home"
            component={Laboratorio}
            options={{
              tabBarIcon: ({ color, size}) => <Ionicons name="home" color={'black'} size={size} />
            }}
          />  
          <Tab.Screen
            name="Tabela"
            component={Tabelaquimica}
            options={{
              tabBarIcon: ({ color, size}) => <Ionicons name="albums-outline" color={'black'} size={size} />
            }}
          />  
        </Tab.Navigator>
    );
}

