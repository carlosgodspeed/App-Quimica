import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

export default function TabelaQuimica() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardPress = (cardId: string) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  const cardRows = [
    [
      { id: 'Hidrogênio', color: styles.green, title: 'H', name: 'Hidrogênio', atomicMass: '1.008', electronConfig: '1s1' },
      { id:'0'},
      { id:'1'},
      { id:'2'},
      { id:'3'},
      { id:'4'},
      { id:'5'},
      { id:'6'},
      { id:'7'},
      { id:'8'},
      { id:'9'},
      { id:'10'},
      { id:'11'},
      { id:'12'},
      { id:'13'},
      { id:'14'},
      { id:'15'},
      { id: 'Hélio', color: styles.blue, title: 'He', name: 'Hélio', atomicMass: '1.008', electronConfig: '1s1' },
    ],
    [
      { id: 'Litio', color: styles.orange, title: 'Li', name: 'Lítio', atomicMass: '6.94', electronConfig: '[He] 2s1' },
      { id: 'Berilio', color: styles.yellow, title: 'Be', name: 'Berílio', atomicMass: '9.0122', electronConfig: '[He] 2s2' },
      { id:'50'},
      { id:'51'},
      { id:'52'},
      { id:'53'},
      { id:'54'},
      { id:'55'},
      { id:'56'},
      { id:'57'},
      { id:'58'},
      { id:'59'},
      { id: 'Boro', color: styles.greenmol, title: 'B', name: 'Boro', atomicMass: '10.81', electronConfig: '[He] 2s2 2p1' },
      { id: 'Carbono', color: styles.green, title: 'C', name: 'Carbono', atomicMass: '12.011', electronConfig: '[He] 2s2 2p2' },
      { id: 'Nitrogenio', color: styles.green, title: 'N', name: 'Nitrogênio', atomicMass: '14.007', electronConfig: '[He] 2s2 2p3' },
      { id: 'Oxigenio', color: styles.green, title: 'O', name: 'Oxigênio', atomicMass: '15.999', electronConfig: '[He] 2s2 2p4' },
      { id: 'Fluor', color: styles.bluewhite, title: 'F', name: 'Flúor', atomicMass: '18.998', electronConfig: '[He] 2s2 2p5' },
      { id: 'Neonio', color: styles.blue, title: 'Ne', name: 'Neônio', atomicMass: '20.180', electronConfig: '[He] 2s2 2p6' },
    ],
    [
      { id: 'Sodio', color: styles.orange, title: 'Na', name: 'Sódio', atomicMass: '22.99', electronConfig: '[Ne] 3s1' },
      { id: 'Magnesio', color: styles.yellow, title: 'Mg', name: 'Magnésio', atomicMass: '24.305', electronConfig: '[Ne] 3s2' },
      { id:'60'},
      { id:'61'},
      { id:'62'},
      { id:'63'},
      { id:'64'},
      { id:'65'},
      { id:'66'},
      { id:'67'},
      { id:'68'},
      { id:'69'},
      { id: 'Al', color: styles.cinza, title: 'AI', name: 'Alumínio', atomicMass: '26.982', electronConfig: '[Ne] 3s2 3p1' },
      { id: 'Si', color: styles.greenmol, title: 'Si', name: 'Silício', atomicMass: '26.982', electronConfig: '[Ne] 3s2 3p1' },
      { id: 'P', color: styles.green, title: 'P', name: 'Fósforo', atomicMass: '26.982', electronConfig: '[Ne] 3s2 3p1' },
      { id: 'S', color: styles.green, title: 'S', name: 'Enxofre', atomicMass: '26.982', electronConfig: '[Ne] 3s2 3p1' },
      { id: 'CI', color: styles.bluewhite, title: 'CI', name: 'Cloro', atomicMass: '26.982', electronConfig: '[Ne] 3s2 3p1' },
      { id: 'Ar', color: styles.blue, title: 'Ar', name: 'Argõnio', atomicMass: '26.982', electronConfig: '[Ne] 3s2 3p1' },
    ],
    [
      { id: 'Potassio', color: styles.orange, title: 'K', name: 'Potássio', atomicMass: '39.098', electronConfig: '[Ar] 4s1' },
      { id: 'Calcio', color: styles.yellow, title: 'Ca', name: 'Cálcio', atomicMass: '40.078', electronConfig: '[Ar] 4s2' },
      { id: 'Escandio', color: styles.salmao, title: 'Sc', name: 'Escândio', atomicMass: '44.956', electronConfig: '[Ar] 3d1 4s2' },
      { id: 'Titanio', color: styles.salmao, title: 'Ti', name: 'Titânio', atomicMass: '47.867', electronConfig: '[Ar] 3d2 4s2' },
      { id: 'Vanadio', color: styles.salmao, title: 'V', name: 'Vanádio', atomicMass: '50.942', electronConfig: '[Ar] 3d3 4s2' },
      { id: 'Cromo', color: styles.salmao, title: 'Cr', name: 'Cromo', atomicMass: '51.996', electronConfig: '[Ar] 3d5 4s1' },
      { id: 'Manganes', color: styles.salmao, title: 'Mn', name: 'Manganês', atomicMass: '54.938', electronConfig: '[Ar] 3d5 4s2' },
      { id: 'Ferro', color: styles.salmao, title: 'Fe', name: 'Ferro', atomicMass: '55.845', electronConfig: '[Ar] 3d6 4s2' },
      { id: 'Cobalto', color: styles.salmao, title: 'Co', name: 'Cobalto', atomicMass: '58.933', electronConfig: '[Ar] 3d7 4s2' },
      { id: 'Niquel', color: styles.salmao, title: 'Ni', name: 'Níquel', atomicMass: '58.693', electronConfig: '[Ar] 3d8 4s2' },
      { id: 'Cobre', color: styles.salmao, title: 'Cu', name: 'Cobre', atomicMass: '63.546', electronConfig: '[Ar] 3d10 4s1' },
      { id: 'Zinco', color: styles.salmao, title: 'Zn', name: 'Zinco', atomicMass: '65.38', electronConfig: '[Ar] 3d10 4s2' },
      { id: 'Gálio', color: styles.cinza, title: 'Ga', name: 'Gálio', atomicMass: '65.38', electronConfig: '[Ar] 3d10 4s2' },
      { id: 'Germanio', color: styles.greenmol, title: 'Ge', name: 'Germânio', atomicMass: '65.38', electronConfig: '[Ar] 3d10 4s2' },
      { id: 'Arsênio', color: styles.greenmol, title: 'As', name: 'Arsênio', atomicMass: '65.38', electronConfig: '[Ar] 3d10 4s2' },
      { id: 'Selenio', color: styles.green, title: 'Se', name: 'Selênio', atomicMass: '65.38', electronConfig: '[Ar] 3d10 4s2' },
      { id: 'Bromo', color: styles.bluewhite, title: 'Br', name: 'Bromo', atomicMass: '65.38', electronConfig: '[Ar] 3d10 4s2' },
      { id: 'criptonio', color: styles.blue, title: 'Kr', name: 'Criptônio', atomicMass: '65.38', electronConfig: '[Ar] 3d10 4s2' },
    ],
    [
      { id: 'Rubidio', color: styles.orange, title: 'Rb', name: 'Rubídio', atomicMass: '85.468', electronConfig: '[Kr] 5s1' },
      { id: 'Estroncio', color: styles.yellow, title: 'Sr', name: 'Estrôncio', atomicMass: '87.62', electronConfig: '[Kr] 5s2' },
      { id: 'Yttrio', color: styles.salmao, title: 'Y', name: 'Ítrio', atomicMass: '88.905', electronConfig: '[Kr] 4d1 5s2' },
      { id: 'Zirconio', color: styles.salmao, title: 'Zr', name: 'Zirconio', atomicMass: '91.224', electronConfig: '[Kr] 4d2 5s2' },
      { id: 'Niobio', color: styles.salmao, title: 'Nb', name: 'Nióbio', atomicMass: '92.906', electronConfig: '[Kr] 4d4 5s1' },
      { id: 'Molibdenio', color: styles.salmao, title: 'Mo', name: 'Molibdênio', atomicMass: '95.95', electronConfig: '[Kr] 4d5 5s1' },
      { id: 'Tecnecio', color: styles.salmao, title: 'Tc', name: 'Tecnécio', atomicMass: '98', electronConfig: '[Kr] 4d5 5s2' },
      { id: 'Rutenio', color: styles.salmao, title: 'Ru', name: 'Rutênio', atomicMass: '101.07', electronConfig: '[Kr] 4d7 5s1' },
      { id: 'Rhodio', color: styles.salmao, title: 'Rh', name: 'Ródio', atomicMass: '102.91', electronConfig: '[Kr] 4d8 5s1' },
      { id: 'Paladio', color: styles.salmao, title: 'Pd', name: 'Paládio', atomicMass: '106.42', electronConfig: '[Kr] 4d10' },
      { id: 'Prata', color: styles.salmao, title: 'Ag', name: 'Prata', atomicMass: '195.08', electronConfig: '[Xe] 4f14 5d9 6s1' },
      { id: 'Cadmio', color: styles.salmao, title: 'Cd', name: 'Cádmio', atomicMass: '195.08', electronConfig: '[Xe] 4f14 5d9 6s1' },
      { id: 'Índio', color: styles.cinza, title: 'In', name: 'Índio', atomicMass: '195.08', electronConfig: '[Xe] 4f14 5d9 6s1' },
      { id: 'Estanho', color: styles.cinza, title: 'Sn', name: 'Estanho', atomicMass: '195.08', electronConfig: '[Xe] 4f14 5d9 6s1' },
      { id: 'Antimônio', color: styles.greenmol, title: 'Sb', name: 'Antimõnio', atomicMass: '195.08', electronConfig: '[Xe] 4f14 5d9 6s1' },
      { id: 'Telurio', color: styles.greenmol, title: 'Te', name: 'Telúrio', atomicMass: '195.08', electronConfig: '[Xe] 4f14 5d9 6s1' },
      { id: 'Iodo', color: styles.bluewhite, title: 'I', name: 'Iodo', atomicMass: '195.08', electronConfig: '[Xe] 4f14 5d9 6s1' },
      { id: 'Xenonio', color: styles.blue, title: 'Xe', name: 'Xenônio', atomicMass: '195.08', electronConfig: '[Xe] 4f14 5d9 6s1' },
    ],
    
    [
      { id: 'Cesio', color: styles.orange, title: 'Cs', name: 'Césio', atomicMass: '132.91', electronConfig: '[Xe] 6s1' },
      { id: 'Bario', color: styles.yellow, title: 'Ba', name: 'Bário', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id:'70'},
      { id: 'Hafnio', color: styles.salmao, title: 'Hf', name: 'Hafnio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'tantalo', color: styles.salmao, title: 'Ta', name: 'Tãntalo', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'Tungstenio', color: styles.salmao, title: 'W', name: 'Tungstênio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'Rênio', color: styles.salmao, title: 'Re', name: 'Rênio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'osmio', color: styles.salmao, title: 'Os', name: 'Ósmio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'iridio', color: styles.salmao, title: 'Ir', name: 'Irídio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'Platina', color: styles.salmao, title: 'Pt', name: 'Platina', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'ouro', color: styles.salmao, title: 'Au', name: 'Ouro', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'Mercurio', color: styles.salmao, title: 'Hg', name: 'Mercúrio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'talio', color: styles.cinza, title: 'TI', name: 'Talio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'chumbo', color: styles.cinza, title: 'Pb', name: 'Chumbo', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'bismuto', color: styles.cinza, title: 'Bi', name: 'Bismuto', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'polonio', color: styles.greenmol, title: 'Po', name: 'Polõnio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'Ástato', color: styles.bluewhite, title: 'At', name: 'Ástato', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'radonio', color: styles.blue, title: 'Rn', name: 'Radõnio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
    ],
    [
      { id: 'Francio', color: styles.orange, title: 'Fr', name: 'Frâncio', atomicMass: '(223)', electronConfig: '[Rn] 7s1' },
      { id: 'Radio', color: styles.yellow, title: 'Ra', name: 'Rádio', atomicMass: '(226)', electronConfig: '[Rn] 7s2' },
      { id:'71'},
      { id: 'Rutherfordio', color: styles.salmao, title: 'Rf', name: 'Ruthefórdio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'Dubnio', color: styles.salmao, title: 'Db', name: 'Dúbnio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'Seaborgio', color: styles.salmao, title: 'Sg', name: 'Seabórgio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'Bóhrio', color: styles.salmao, title: 'Bh', name: 'Bóhrio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'Hássio', color: styles.salmao, title: 'Hs', name: 'Hássio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'meitnerio', color: styles.salmao, title: 'Mt', name: 'Meitnerio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'Darmstadio', color: styles.salmao, title: 'Ds', name: 'Darmstádio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'roentgenio', color: styles.salmao, title: 'Rg', name: 'Roentgênio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'copernicio', color: styles.salmao, title: 'Cn', name: 'Copernicio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'nihonio', color: styles.cinza, title: 'Nh', name: 'Nihõnio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'flerovio', color: styles.cinza, title: 'Fi', name: 'Fleróvio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'moscovio', color: styles.cinza, title: 'Mc', name: 'Moscóvio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'Livermorio', color: styles.cinza, title: 'Lv', name: 'Livermório', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'Tenessino', color: styles.bluewhite, title: 'Ts', name: 'Tenessino', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'organessonio', color: styles.blue, title: 'Og', name: 'Oganessõnio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
    ],
    [
      { id:'72'},
      { id:'73'},
      { id:'74'},
      { id: 'lantanio', color: styles.bluelit, title: 'La', name: 'Lantãnio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'cerio', color: styles.bluelit, title: 'Ce', name: 'Cério', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
      { id: 'Praseodimio', color: styles.bluelit, title: 'Pr', name: 'Praseodímio', atomicMass: '137.33', electronConfig: '[Xe] 6s2' },
    ],
  
  ];
  
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text style={styles.title}></Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Scroll vertical geral para a tabela inteira */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.cardsWrapper}>
            {cardRows.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {row.map((card) => (
                  <TouchableOpacity
                    key={card.id}
                    style={[styles.card, card.color, selectedCard === card.id && styles.selectedCard]}
                    onPress={() => handleCardPress(card.id)}
                  >
                    <Text style={styles.atomicNumber}>{card.id === 'Hidrogênio' ? '1' : ''}</Text>
                    <Text style={styles.atomicNumber}>{card.id === 'Hélio' ? '2' : ''}</Text>
                    <Text style={styles.tip}>{card.title}</Text>
                    <Text style={styles.elementName}>{card.name}</Text>
                    {selectedCard === card.id && (
                      <View style={styles.expandedInfo}>
                        <Text style={styles.moreInfo}>Massa Atômica: {card.atomicMass}</Text>
                        <Text style={styles.moreInfo}>Config. Eletrônica: {card.electronConfig}</Text>
                      </View>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2C3E50',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  scrollViewContainer: {
    paddingVertical: 10,
  },
  cardsWrapper: {
    flexDirection: 'column', // Mantém as linhas na vertical
  },
  row: {
    flexDirection: 'row', // Alinha os cards horizontalmente dentro de cada linha
    marginBottom: 10, // Espaçamento entre as linhas
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 10,
    color: 'white',
    marginHorizontal: 8, // Aumenta o espaçamento entre os cards
    padding: 5,
  },
  selectedCard: {
    height: 150,
    width: 150,
  },
  atomicNumber: {
    fontSize: 12,
    color: 'black',
    position: 'absolute',
    top: 5,
    left: 5,
  },
  tip: {
    fontSize: 35,
    fontWeight: '900',
    color: 'black',
  },
  elementName: {
    fontSize: 15,
    color: 'black',
    marginTop: 5,
  },
  expandedInfo: {
    marginTop: 10,
    alignItems: 'center',
  },
  moreInfo: {
    fontSize: 13,
    color: 'black',
    textAlign: 'center',
  },
  green: { backgroundColor: '#8BC34A' },
  greenmol: { backgroundColor: '#00ffd0' },
  blue: { backgroundColor: '#2196F3' },
  bluewhite: { backgroundColor: '#6296c0' },
  bluelit: { backgroundColor: '#67e3ff' },
  yellow: { backgroundColor: '#ffff00' },
  purple: { backgroundColor: 'purple' },
  orange: { backgroundColor: 'orange' },
  salmao: { backgroundColor: '#fa8072' },
  white: { backgroundColor: '#000000' },
  cinza: { backgroundColor: '#7cadac' },
});