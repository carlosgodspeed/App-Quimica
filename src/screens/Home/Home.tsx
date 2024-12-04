import React, { useEffect, useRef } from 'react';
import { Animated,Text } from 'react-native';
import Video from 'react-native-video';
import {
  Container,
  LogoContainer,
  Logo,
  AnimatedTitle,
  Subtitle,
  ListContainer,
  ListItem,
  FooterText,
} from './styles';

export default function Home() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Container>
      <LogoContainer>
        <Logo
          source={{uri: 'https://www.hareketligifler.net/data/media/1783/kimyaci-hareketli-resim-0011.gif'}}
          resizeMode="contain"
        />
      </LogoContainer>
      <AnimatedTitle style={{ opacity: fadeAnim }}>
        Bem-vindo ao App de Química
      </AnimatedTitle>
      <Subtitle>Explore os principais recursos do app:</Subtitle>
      <ListContainer>
        <ListItem>🔬 Tabela Periódica Interativa</ListItem>
        <Text></Text>
        <ListItem>⚗️ Informações Sobre Elementos Químicos</ListItem>
        <Text></Text>
        <ListItem>🌱 Conteúdos Sobre Gestão Ambiental</ListItem>
        <Text></Text>
        <ListItem>🧪 Recursos Para Práticas de Laboratórios</ListItem>
      </ListContainer>
      <FooterText>Deslize a tela para começar</FooterText>
    </Container>
  );
}
