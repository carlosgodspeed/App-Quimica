import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #34495e; /* Cor de fundo */
  padding: 20px;
`;

export const LogoContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Logo = styled.Image`
  width: 220px;
  height: 220px;
`;

export const AnimatedTitle = styled(Animated.Text)`
  font-size: 28px;
  font-weight: bold;
  color: #ffffff; /* Cor do texto */
  text-align: center;
  margin-bottom: 15px;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  color: #bbbbbb; /* Cor do subtítulo */
  text-align: center;
  margin-bottom: 10px;
`;

export const ListContainer = styled.View`
  align-items: flex-start;
  width: 100%;
`;

export const ListItem = styled.Text`
  font-size: 16px;
  color: #ffffff; /* Cor do item da lista */
  margin-bottom: 8px;
`;

export const FooterText = styled.Text`
  font-size: 16px;
  color: #bbbbbb; /* Cor do texto do rodapé */
  margin-top: 20px;
  text-align: center;
`;
