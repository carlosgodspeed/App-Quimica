import { Stack } from 'expo-router';
import { colors } from '../components/Screen';
export default function RootLayout() { return <Stack screenOptions={{ headerShown:false, contentStyle:{backgroundColor:colors.bg}, animation:'slide_from_right' }}><Stack.Screen name="(tabs)"/><Stack.Screen name="element/[symbol]" options={{presentation:'card'}}/></Stack>; }

