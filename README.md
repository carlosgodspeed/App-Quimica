# Química+

Aplicativo Expo para estudantes de Química. Recria e amplia a proposta do [App-Quimica original](https://github.com/carlosgodspeed/App-Quimica), com navegação por áreas de estudo.

## Recursos

- Tabela periódica interativa com os 118 elementos, busca por nome/símbolo/número, filtro por família e ficha de cada elemento.
- Guia de laboratório com usos de vidrarias, boas práticas e avisos de segurança.
- Conteúdo introdutório de química ambiental e sustentabilidade.
- Quiz de revisão com alternativas, pontuação e explicações.
- Expo Router com navegação inferior, transições leves e interface adaptada para celular.

## Executar

```bash
npm install
npx expo start --clear
```

## Dados e segurança

Massas atômicas abreviadas seguem a tabela 2024 da [CIAAW](https://www.ciaaw.org/abridged-atomic-weights.htm). Massas entre colchetes indicam números de massa de referência para elementos sem peso atômico padrão. Os conteúdos laboratoriais são introdutórios: atividades práticas devem seguir as regras da instituição, orientação de um responsável e as fichas de segurança dos reagentes.

## Organização

- `src/app/`: rotas e telas.
- `src/components/`: componentes reutilizáveis e tema visual.
- `src/data/`: elementos e informações de referência.

