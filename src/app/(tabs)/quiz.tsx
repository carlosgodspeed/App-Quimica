import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Brand, Eyebrow, Screen, colors } from '../../components/Screen';

type Question={q:string;options:string[];answer:number;explanation:string};
const quizzes:{id:string;title:string;questions:Question[]}[]=[
  {id:'geral',title:'Química geral',questions:[
    {q:'Qual é o símbolo químico do sódio?',options:['S','So','Na','Sd'],answer:2,explanation:'Na vem do nome latino natrium. O número atômico do sódio é 11.'},
    {q:'Qual partícula tem carga elétrica negativa?',options:['Próton','Nêutron','Elétron','Núcleo'],answer:2,explanation:'O elétron tem carga negativa; prótons são positivos e nêutrons não têm carga.'},
    {q:'Uma solução tem pH 3. Ela é…',options:['Ácida','Neutra','Básica','Metálica'],answer:0,explanation:'Em condições usuais, soluções com pH menor que 7 são ácidas.'},
    {q:'Quantos prótons há no núcleo do carbono?',options:['4','6','8','12'],answer:1,explanation:'O número atômico do carbono é 6, igual ao número de prótons.'},
  ]},
  {id:'solucoes',title:'Soluções',questions:[
    {q:'Qual unidade representa molaridade?',options:['mol/L','g/cm','kg·m','°C/L'],answer:0,explanation:'Molaridade é a quantidade de matéria do soluto por volume de solução, geralmente expressa em mol/L.'},
    {q:'Uma solução 2,0 mol/L é diluída de 50 mL para 250 mL. Qual é a concentração final?',options:['0,2 mol/L','0,4 mol/L','2,5 mol/L','10 mol/L'],answer:1,explanation:'C₁V₁=C₂V₂; C₂=(2,0×50)/250=0,40 mol/L.'},
    {q:'Qual material é calibrado para preparar um volume final definido?',options:['Béquer','Balão volumétrico','Erlenmeyer','Funil'],answer:1,explanation:'O balão volumétrico tem marca de calibração para conter um volume específico.'},
    {q:'Uma solução contém 0,5 mol em 2 L. Qual é sua molaridade?',options:['0,10 mol/L','0,25 mol/L','1,0 mol/L','4,0 mol/L'],answer:1,explanation:'M=n/V=0,5/2=0,25 mol/L.'},
  ]},
  {id:'estequio',title:'Estequiometria',questions:[
    {q:'Quantos mols existem em 18 g de água? Considere massa molar 18 g/mol.',options:['0,5 mol','1 mol','18 mol','324 mol'],answer:1,explanation:'n=m/Mm=18 g ÷ 18 g/mol=1 mol.'},
    {q:'Qual é a massa de 2 mol de NaCl? Mm=58,44 g/mol.',options:['29,22 g','58,44 g','116,88 g','234 g'],answer:2,explanation:'m=n×Mm=2×58,44=116,88 g.'},
    {q:'Na equação 2 H₂ + O₂ → 2 H₂O, quantos mols de água se formam a partir de 2 mol de H₂ com O₂ em excesso?',options:['1 mol','2 mol','3 mol','4 mol'],answer:1,explanation:'A proporção H₂:H₂O é 2:2; portanto, 2 mol de H₂ formam 2 mol de água.'},
    {q:'Uma amostra tem 0,25 mol e massa molar de 40 g/mol. Qual é sua massa?',options:['0,00625 g','10 g','40,25 g','160 g'],answer:1,explanation:'m=n×Mm=0,25×40=10 g.'},
  ]},
  {id:'fisica',title:'Física',questions:[
    {q:'Um objeto percorre 120 m em 10 s. Qual é a velocidade média?',options:['10 m/s','12 m/s','120 m/s','1.200 m/s'],answer:1,explanation:'v=Δs/Δt=120/10=12 m/s.'},
    {q:'Qual força atua em um corpo de 2 kg com aceleração de 3 m/s²?',options:['1,5 N','5 N','6 N','9 N'],answer:2,explanation:'Pela segunda lei de Newton, F=m×a=2×3=6 N.'},
    {q:'Qual é a densidade de 20 g de material que ocupa 5 cm³?',options:['0,25 g/cm³','4 g/cm³','15 g/cm³','100 g/cm³'],answer:1,explanation:'ρ=m/V=20/5=4 g/cm³.'},
    {q:'Uma amostra de 100 g aquece 2 °C. Se c=4,18 J/(g·°C), quanto calor recebeu?',options:['20,9 J','209 J','836 J','8.360 J'],answer:2,explanation:'Q=mcΔT=100×4,18×2=836 J.'},
  ]},
  {id:'lab',title:'Laboratório',questions:[
    {q:'Qual vidro é mais indicado para medir um volume aproximado com boa leitura?',options:['Béquer','Proveta','Vidro de relógio','Tubo de ensaio'],answer:1,explanation:'A proveta mede volumes com mais precisão que as marcações aproximadas de um béquer.'},
    {q:'O que fazer antes de iniciar uma prática?',options:['Cheirar os reagentes','Ler o procedimento e os perigos','Misturar os produtos','Retirar os rótulos'],answer:1,explanation:'Leia o procedimento, identifique perigos, descarte e equipamentos de proteção antes de começar.'},
    {q:'Como pipetar uma solução?',options:['Com a boca','Com pipetador adequado','Inclinando o frasco','Por sucção direta'],answer:1,explanation:'Use sempre um pipetador adequado; nunca pipete com a boca.'},
    {q:'Onde descartar resíduos de uma prática?',options:['Na pia sempre','No lixo comum','Conforme as regras do laboratório','No primeiro frasco disponível'],answer:2,explanation:'Siga as orientações da instituição e o procedimento de descarte do resíduo.'},
  ]},
];
export default function Quiz(){
  const [topic,setTopic]=useState('geral');const quiz=quizzes.find((item)=>item.id===topic)!;const [index,setIndex]=useState(0);const [chosen,setChosen]=useState<number|null>(null);const [score,setScore]=useState(0);const question=quiz.questions[index]!;
  const next=()=>{setChosen(null);setIndex((current)=>(current+1)%quiz.questions.length);};
  useEffect(()=>{if(chosen===null)return;const timer=setTimeout(()=>{setChosen(null);setIndex((current)=>(current+1)%quiz.questions.length);},2400);return()=>clearTimeout(timer);},[chosen,quiz.questions.length]);
  const answer=(i:number)=>{if(chosen!==null)return;setChosen(i);if(i===question.answer)setScore((value)=>value+1);};
  const selectTopic=(id:string)=>{setTopic(id);setIndex(0);setChosen(null);setScore(0);};
  return <Screen><Brand/><Eyebrow>QUIZ DE QUÍMICA E FÍSICA</Eyebrow><Text style={styles.title}>Pratique no seu ritmo.</Text><Text style={styles.subtitle}>Escolha um tema. As questões de cálculo mostram a resolução.</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.topics}>{quizzes.map((item)=><Pressable key={item.id} onPress={()=>selectTopic(item.id)} style={[styles.topic,topic===item.id&&styles.topicActive]}><Text style={[styles.topicText,topic===item.id&&styles.topicActiveText]}>{item.title}</Text></Pressable>)}</ScrollView>
    <Text style={styles.progressText}>QUESTÃO {index+1} DE {quiz.questions.length}  ·  ACERTOS: {score}</Text><View style={styles.progress}><View style={[styles.progressFill,{width:`${((index+1)/quiz.questions.length)*100}%`}]}/></View><View style={styles.card}><Text style={styles.question}>{question.q}</Text>{question.options.map((option,i)=>{const correct=chosen!==null&&i===question.answer;const wrong=chosen===i&&i!==question.answer;return <Pressable key={option} onPress={()=>answer(i)} style={[styles.option,correct&&styles.correct,wrong&&styles.wrong]}><Text style={[styles.letter,correct&&styles.correctLetter,wrong&&styles.wrongLetter]}>{String.fromCharCode(65+i)}</Text><Text style={[styles.optionText,correct&&styles.correctText]}>{option}</Text><Text style={styles.mark}>{correct?'✓':wrong?'×':''}</Text></Pressable>})}
    {chosen!==null&&<View style={styles.explanation}><Text style={styles.explanationTitle}>{chosen===question.answer?'Acertou!':'Vamos revisar:'}</Text><Text style={styles.explanationText}>{question.explanation}</Text><Text style={styles.auto}>PRÓXIMA QUESTÃO EM INSTANTES…</Text></View>}
    <Pressable disabled={chosen===null} onPress={next} style={[styles.button,chosen===null&&styles.disabled]}><Text style={styles.buttonText}>{chosen===null?'ESCOLHA UMA RESPOSTA':'AVANÇAR AGORA  →'}</Text></Pressable></View><Text style={styles.note}>Sua pontuação reinicia quando você troca de tema. O quiz avança sozinho depois da explicação.</Text></Screen>;
}
const styles=StyleSheet.create({title:{fontSize:27,fontWeight:'900',color:colors.text},subtitle:{fontSize:11,lineHeight:16,color:colors.muted,marginTop:5,marginBottom:10},topics:{gap:7,paddingVertical:8},topic:{borderWidth:1,borderColor:colors.line,borderRadius:18,backgroundColor:colors.panel,paddingHorizontal:12,paddingVertical:9},topicActive:{borderColor:colors.lime,backgroundColor:colors.soft},topicText:{fontSize:9,fontWeight:'800',color:colors.muted},topicActiveText:{color:colors.lime},progressText:{fontSize:8,fontWeight:'900',letterSpacing:.8,color:colors.muted,marginTop:8,marginBottom:7},progress:{height:5,backgroundColor:colors.line,borderRadius:3,marginBottom:15,overflow:'hidden'},progressFill:{height:5,backgroundColor:colors.lime},card:{backgroundColor:colors.panel,borderWidth:1,borderColor:colors.line,borderRadius:17,padding:15},question:{fontSize:17,lineHeight:24,fontWeight:'900',color:colors.text,marginBottom:16},option:{minHeight:47,borderWidth:1,borderColor:colors.line,backgroundColor:colors.elevated,borderRadius:12,marginBottom:8,padding:10,flexDirection:'row',alignItems:'center',gap:10},correct:{borderColor:colors.lime,backgroundColor:'#153c39'},wrong:{borderColor:'#e57b83',backgroundColor:'#40252b'},letter:{width:25,height:25,borderRadius:9,backgroundColor:colors.subtle,textAlign:'center',textAlignVertical:'center',fontWeight:'900',fontSize:10,color:colors.muted},correctLetter:{backgroundColor:'#205b50',color:'#b4f5dc'},wrongLetter:{backgroundColor:'#62353c',color:'#ffd2d2'},optionText:{flex:1,fontSize:11,lineHeight:16,fontWeight:'700',color:colors.text},correctText:{color:'#a9f0d5'},mark:{fontSize:17,fontWeight:'900',color:colors.lime},explanation:{backgroundColor:colors.subtle,borderRadius:11,padding:11,marginTop:4,marginBottom:12,borderLeftWidth:3,borderLeftColor:colors.lime},explanationTitle:{fontSize:11,fontWeight:'900',color:colors.lime},explanationText:{fontSize:10,lineHeight:16,color:colors.text,marginTop:4},auto:{fontSize:8,fontWeight:'900',letterSpacing:.8,color:colors.muted,marginTop:9},button:{height:43,backgroundColor:colors.navy,borderRadius:12,alignItems:'center',justifyContent:'center',marginTop:11},disabled:{opacity:.5},buttonText:{fontSize:9,fontWeight:'900',letterSpacing:1,color:'#fff'},note:{fontSize:9,lineHeight:14,color:colors.muted,marginTop:12}});

