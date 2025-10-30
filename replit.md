# React Hooks - Projeto de Estudo

## Visão Geral
Aplicação simples demonstrando o uso básico de **useState** e **useEffect** no React. Projeto educacional para aprendizado de hooks.

## Data da Última Atualização
29 de outubro de 2025

## Funcionalidades

### 1. Menu Toggle (useState)
- Botão "Abrir Menu" / "Fechar Menu"
- Mostra/esconde menu com link Home
- Botão de alternância de tema dentro do menu

### 2. Contador Automático (useEffect)
- Contador que incrementa a cada 1 segundo
- Demonstra cleanup function para limpar intervalos
- Display simples com número grande

### 3. Tema Claro/Escuro (useState + useEffect)
- Botão para alternar entre tema claro e escuro
- Salva preferência no localStorage
- Muda cor de fundo e texto do body

## Estrutura do Projeto

```
client/src/
└── App.tsx                     # Componente principal com tudo
```

## Tecnologias

- **React 18+** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Inline Styles** - Estilização direta no JSX

## Hooks Demonstrados

### useState
- menuAberto (true/false) - controla se o menu está visível
- tema ('claro'/'escuro') - controla o tema atual
- contador (número) - valor do contador que incrementa

### useEffect
1. Carregar tema salvo do localStorage ao iniciar
2. Criar interval para incrementar contador a cada 1 segundo
   - Com cleanup function para limpar o interval

## Estilo

- Inline styles simples
- Cores básicas (#fff, #ccc, #1a1a1a)
- Border radius 4px
- Sem animações complexas

## Como Executar

O workflow "Start application" já está configurado e roda `npm run dev`, que inicia:
- Backend Express na porta configurada
- Frontend Vite na mesma porta

## Estrutura da Aplicação

- **Página única** - Tudo em App.tsx
- **Menu simples** - Abre/fecha com botão
- **Toggle de tema** - Botão dentro do menu

## Abordagem

Este projeto usa uma abordagem **simples e direta**:
- Todo código em um único componente
- Inline styles ao invés de CSS externo
- Sem bibliotecas de UI complexas
- Focado em demonstrar os hooks básicos
- Código fácil de entender para iniciantes

## Créditos

- **Desenvolvedor Original**: Matheus (losthotel)
- **Refatoração**: Replit Agent
- **Finalidade**: Projeto educacional sobre React Hooks
