export type Family = 'alcalinos' | 'alcalino-terrosos' | 'transicao' | 'pos-transicao' | 'metaloides' | 'nao-metais' | 'halogenios' | 'gases-nobres' | 'lantanideos' | 'actinideos';
export type ElementData = { number:number; symbol:string; name:string; mass:string; family:Family; state:'Sólido'|'Líquido'|'Gasoso'; use:string };
export type TableCell = ElementData | null | { placeholder:string };

const raw = `H|Hidrogênio|1,008|nao-metais
He|Hélio|4,0026|gases-nobres
Li|Lítio|6,94|alcalinos
Be|Berílio|9,0122|alcalino-terrosos
B|Boro|10,81|metaloides
C|Carbono|12,011|nao-metais
N|Nitrogênio|14,007|nao-metais
O|Oxigênio|15,999|nao-metais
F|Flúor|18,998|halogenios
Ne|Neônio|20,180|gases-nobres
Na|Sódio|22,990|alcalinos
Mg|Magnésio|24,305|alcalino-terrosos
Al|Alumínio|26,982|pos-transicao
Si|Silício|28,085|metaloides
P|Fósforo|30,974|nao-metais
S|Enxofre|32,06|nao-metais
Cl|Cloro|35,45|halogenios
Ar|Argônio|39,948|gases-nobres
K|Potássio|39,098|alcalinos
Ca|Cálcio|40,078|alcalino-terrosos
Sc|Escândio|44,956|transicao
Ti|Titânio|47,867|transicao
V|Vanádio|50,942|transicao
Cr|Cromo|51,996|transicao
Mn|Manganês|54,938|transicao
Fe|Ferro|55,845|transicao
Co|Cobalto|58,933|transicao
Ni|Níquel|58,693|transicao
Cu|Cobre|63,546|transicao
Zn|Zinco|65,38|transicao
Ga|Gálio|69,723|pos-transicao
Ge|Germânio|72,630|metaloides
As|Arsênio|74,922|metaloides
Se|Selênio|78,971|nao-metais
Br|Bromo|79,904|halogenios
Kr|Criptônio|83,798|gases-nobres
Rb|Rubídio|85,468|alcalinos
Sr|Estrôncio|87,62|alcalino-terrosos
Y|Ítrio|88,906|transicao
Zr|Zircônio|91,224|transicao
Nb|Nióbio|92,906|transicao
Mo|Molibdênio|95,95|transicao
Tc|Tecnécio|[98]|transicao
Ru|Rutênio|101,07|transicao
Rh|Ródio|102,91|transicao
Pd|Paládio|106,42|transicao
Ag|Prata|107,87|transicao
Cd|Cádmio|112,41|transicao
In|Índio|114,82|pos-transicao
Sn|Estanho|118,71|pos-transicao
Sb|Antimônio|121,76|metaloides
Te|Telúrio|127,60|metaloides
I|Iodo|126,90|halogenios
Xe|Xenônio|131,29|gases-nobres
Cs|Césio|132,91|alcalinos
Ba|Bário|137,33|alcalino-terrosos
La|Lantânio|138,91|lantanideos
Ce|Cério|140,12|lantanideos
Pr|Praseodímio|140,91|lantanideos
Nd|Neodímio|144,24|lantanideos
Pm|Promécio|[145]|lantanideos
Sm|Samário|150,36|lantanideos
Eu|Európio|151,96|lantanideos
Gd|Gadolínio|157,25|lantanideos
Tb|Térbio|158,93|lantanideos
Dy|Disprósio|162,50|lantanideos
Ho|Hólmio|164,93|lantanideos
Er|Érbio|167,26|lantanideos
Tm|Túlio|168,93|lantanideos
Yb|Itérbio|173,05|lantanideos
Lu|Lutécio|174,97|lantanideos
Hf|Háfnio|178,49|transicao
Ta|Tântalo|180,95|transicao
W|Tungstênio|183,84|transicao
Re|Rênio|186,21|transicao
Os|Ósmio|190,23|transicao
Ir|Irídio|192,22|transicao
Pt|Platina|195,08|transicao
Au|Ouro|196,97|transicao
Hg|Mercúrio|200,59|transicao
Tl|Tálio|204,38|pos-transicao
Pb|Chumbo|207,2|pos-transicao
Bi|Bismuto|208,98|pos-transicao
Po|Polônio|[209]|pos-transicao
At|Astato|[210]|halogenios
Rn|Radônio|[222]|gases-nobres
Fr|Frâncio|[223]|alcalinos
Ra|Rádio|[226]|alcalino-terrosos
Ac|Actínio|[227]|actinideos
Th|Tório|232,04|actinideos
Pa|Protactínio|231,04|actinideos
U|Urânio|238,03|actinideos
Np|Neptúnio|[237]|actinideos
Pu|Plutônio|[244]|actinideos
Am|Amerício|[243]|actinideos
Cm|Cúrio|[247]|actinideos
Bk|Berquélio|[247]|actinideos
Cf|Califórnio|[251]|actinideos
Es|Einstênio|[252]|actinideos
Fm|Férmio|[257]|actinideos
Md|Mendelévio|[258]|actinideos
No|Nobélio|[259]|actinideos
Lr|Laurêncio|[266]|actinideos
Rf|Rutherfórdio|[267]|transicao
Db|Dúbnio|[268]|transicao
Sg|Seabórgio|[269]|transicao
Bh|Bóhrio|[270]|transicao
Hs|Hássio|[269]|transicao
Mt|Meitnério|[278]|transicao
Ds|Darmstádio|[281]|transicao
Rg|Roentgênio|[282]|transicao
Cn|Copernício|[285]|transicao
Nh|Nihônio|[286]|pos-transicao
Fl|Fleróvio|[289]|pos-transicao
Mc|Moscóvio|[290]|pos-transicao
Lv|Livermório|[293]|pos-transicao
Ts|Tenessino|[294]|halogenios
Og|Oganessônio|[294]|gases-nobres`;

const commonUses: Record<string,string> = {
  H:'Produção de amônia e combustíveis; é o elemento mais abundante do Universo.', He:'Balões e aplicações criogênicas por seu baixo ponto de ebulição.', C:'Base da química orgânica; aparece em grafite, diamante e materiais.', N:'Componente majoritário do ar; usado na produção de fertilizantes.', O:'Essencial à respiração e utilizado em processos industriais.', Na:'Presente em sais e em diversos compostos usados na indústria.', Mg:'Ligas leves, sinalizadores e compostos importantes para seres vivos.', Al:'Ligas leves, embalagens, transporte e construção.', Si:'Semicondutores, vidro e materiais cerâmicos.', P:'Fertilizantes, detergentes e moléculas biológicas como o DNA.', S:'Produção de ácido sulfúrico e vulcanização da borracha.', Cl:'Desinfecção controlada de água e fabricação de compostos.', Ca:'Cimentos, materiais de construção e estruturas biológicas.', Fe:'Produção de aço e ligas utilizadas em construção e transporte.', Cu:'Fiação elétrica, tubulações e ligas metálicas.', Zn:'Proteção anticorrosiva e produção de ligas.', Ag:'Contatos elétricos, joalheria e aplicações fotográficas.', Au:'Joalheria, contatos eletrônicos e catalisadores.', Hg:'Instrumentos e processos específicos; requer controle rigoroso por toxicidade.', U:'Combustível em reatores nucleares sob controles especializados.',
};
const gases = new Set(['H','N','O','F','Cl','He','Ne','Ar','Kr','Xe','Rn']);
const liquids = new Set(['Br','Hg']);
export const elements: ElementData[] = raw.split('\n').map((line, index) => {
  const [symbol, name, mass, family] = line.trim().split('|');
  return { number:index+1, symbol:symbol!, name:name!, mass:mass!, family:family as Family, state:gases.has(symbol!) ? 'Gasoso' : liquids.has(symbol!) ? 'Líquido' : 'Sólido', use:commonUses[symbol!] ?? 'Aplicações em pesquisa, ciência dos materiais ou processos industriais.' };
});
export const bySymbol = Object.fromEntries(elements.map((element) => [element.symbol, element])) as Record<string,ElementData>;

const empty = null;
const cell = (symbol:string) => bySymbol[symbol]!;
export const mainRows: TableCell[][] = [
  [cell('H'), ...Array(16).fill(empty), cell('He')],
  [cell('Li'),cell('Be'), ...Array(10).fill(empty),cell('B'),cell('C'),cell('N'),cell('O'),cell('F'),cell('Ne')],
  [cell('Na'),cell('Mg'), ...Array(10).fill(empty),cell('Al'),cell('Si'),cell('P'),cell('S'),cell('Cl'),cell('Ar')],
  ['K','Ca','Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Ga','Ge','As','Se','Br','Kr'].map(cell),
  ['Rb','Sr','Y','Zr','Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd','In','Sn','Sb','Te','I','Xe'].map(cell),
  [cell('Cs'),cell('Ba'),{ placeholder:'57–71' }, ...['Hf','Ta','W','Re','Os','Ir','Pt','Au','Hg','Tl','Pb','Bi','Po','At','Rn'].map(cell)],
  [cell('Fr'),cell('Ra'),{ placeholder:'89–103' }, ...['Rf','Db','Sg','Bh','Hs','Mt','Ds','Rg','Cn','Nh','Fl','Mc','Lv','Ts','Og'].map(cell)],
];
export const lanthanides = elements.slice(56,71);
export const actinides = elements.slice(88,103);

export const familyInfo: Record<Family,{label:string;color:string}> = {
  alcalinos:{label:'Metais alcalinos',color:'#ffd5b6'}, 'alcalino-terrosos':{label:'Metais alcalino-terrosos',color:'#ffe9a8'}, transicao:{label:'Metais de transição',color:'#c6e4f5'}, 'pos-transicao':{label:'Metais pós-transição',color:'#dce5e8'}, metaloides:{label:'Metaloides',color:'#d1f0d7'}, 'nao-metais':{label:'Outros não-metais',color:'#b7eee4'}, halogenios:{label:'Halogênios',color:'#e9d7fa'}, 'gases-nobres':{label:'Gases nobres',color:'#d2dcfb'}, lantanideos:{label:'Lantanídeos',color:'#f7d5e3'}, actinideos:{label:'Actinídeos',color:'#f7d2cc'},
};
export function searchElements(query:string) { const needle = query.trim().toLocaleLowerCase('pt-BR'); return needle ? elements.filter((element) => element.name.toLocaleLowerCase('pt-BR').includes(needle) || element.symbol.toLowerCase().includes(needle) || String(element.number) === needle) : elements; }

