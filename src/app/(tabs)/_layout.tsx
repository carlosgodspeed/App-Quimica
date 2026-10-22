import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { colors } from '../../components/Screen';
const icons:Record<string,string>={index:'⌂',tabela:'▦',laboratorio:'⚗',noticias:'◉',quiz:'✦'};
export default function TabsLayout(){return <Tabs screenOptions={({route})=>({headerShown:false,tabBarActiveTintColor:colors.lime,tabBarInactiveTintColor:colors.muted,tabBarStyle:{height:70,paddingTop:8,paddingBottom:8,borderTopColor:colors.line,backgroundColor:colors.panel},tabBarLabelStyle:{fontSize:9,fontWeight:'700'},tabBarIcon:({color})=><Text style={{fontSize:19,color}}>{icons[route.name]}</Text>})}><Tabs.Screen name="index" options={{title:'Início'}}/><Tabs.Screen name="tabela" options={{title:'Tabela'}}/><Tabs.Screen name="laboratorio" options={{title:'Laboratório'}}/><Tabs.Screen name="noticias" options={{title:'Notícias'}}/><Tabs.Screen name="quiz" options={{title:'Quiz'}}/><Tabs.Screen name="ambiental" options={{href:null}}/></Tabs>;}

