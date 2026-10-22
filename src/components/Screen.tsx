import { useEffect, useState } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const colors = { bg: '#08131b', panel: '#111f2a', line: '#243743', text: '#e7f1f4', muted: '#95a9b4', lime: '#58dec3', navy: '#123542', soft: '#183a43', elevated: '#172833', subtle: '#10212b' };

export function Screen({ children, scroll = true }: { children: React.ReactNode; scroll?: boolean }) {
  const [opacity] = useState(() => new Animated.Value(0));
  const [translateY] = useState(() => new Animated.Value(12));
  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
      Animated.spring(translateY, { toValue: 0, useNativeDriver: true, speed: 18, bounciness: 3 }),
    ]).start();
  }, [opacity, translateY]);
  return <View style={styles.root}><StatusBar style="light" />{scroll ? <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}><Animated.View style={{ opacity, transform: [{ translateY }] }}>{children}</Animated.View></ScrollView> : <Animated.View style={[styles.content, { opacity, transform: [{ translateY }] }]}>{children}</Animated.View>}</View>;
}

export function Brand() { return <View style={styles.brandRow}><View style={styles.mark}><Text style={styles.markText}>⚗</Text></View><Text style={styles.brand}>QUÍMICA<Text style={{ color: colors.lime }}>+</Text></Text></View>; }
export function Eyebrow({ children }: { children: React.ReactNode }) { return <Text style={styles.eyebrow}>{children}</Text>; }
const styles = StyleSheet.create({ root: { flex: 1, backgroundColor: colors.bg }, content: { paddingHorizontal: 20, paddingTop: 50, paddingBottom: 30 }, brandRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 25 }, mark: { width: 34, height: 34, borderRadius: 11, backgroundColor: colors.soft, alignItems: 'center', justifyContent: 'center', marginRight: 10 }, markText: { color: colors.navy, fontSize: 19 }, brand: { color: colors.text, fontSize: 15, fontWeight: '900', letterSpacing: 1.3 }, eyebrow: { color: colors.lime, fontSize: 10, fontWeight: '900', letterSpacing: 1.6, marginBottom: 9 } });

