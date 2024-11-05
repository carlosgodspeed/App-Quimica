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
              tabBarIcon: () => <Ionicons name="logo-electron" />
            }}
          />  
          <Tab.Screen
            name="Home"
            component={Laboratorio}
            options={{
              tabBarIcon: () => <Ionicons name="home" />
            }}
          />  
          <Tab.Screen
            name="Tabelaquimica"
            component={Tabelaquimica}
            options={{
              tabBarIcon: () => <Ionicons name="albums-outline"/>
            }}
          />  
        </Tab.Navigator>
    );
}

