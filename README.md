# World in Green - Projeto Ambiental

Um site educativo sobre questões ambientais, focado em desmatamento, oceanos, agricultura e soluções sustentáveis.

## Sobre o Projeto

O World in Green é uma plataforma educativa que visa conscientizar sobre os impactos ambientais causados por ações humanas e promover soluções sustentáveis. O site aborda temas como desmatamento, poluição dos oceanos, impactos da agricultura e apresenta soluções para um futuro mais sustentável.

## Tecnologias Utilizadas

- React 19
- TypeScript
- Vite
- Styled Components
- React Router
- Framer Motion (para animações)
- i18next (para internacionalização)

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/world-in-green.git
cd world-in-green

# Instale as dependências
npm install
# ou
yarn install
```

## Executando o Projeto

```bash
# Modo de desenvolvimento
npm run dev
# ou
yarn dev

# Construir para produção
npm run build
# ou
yarn build

# Visualizar versão de produção localmente
npm run preview
# ou
yarn preview
```

## Estrutura do Projeto

```
src/
├── assets/        # Recursos estáticos
├── components/    # Componentes reutilizáveis
├── data/          # Dados do aplicativo
├── hooks/         # Hooks personalizados
├── locales/       # Arquivos de tradução
├── pages/         # Páginas do aplicativo
├── styles/        # Estilos globais e temas
├── types/         # Definições de tipos TypeScript
├── App.tsx        # Componente principal
└── main.tsx       # Ponto de entrada
```

## Deploy

### GitHub

1. Crie um repositório no GitHub
2. Adicione o repositório remoto ao seu projeto local:
   ```bash
   git remote add origin https://github.com/seu-usuario/world-in-green.git
   ```
3. Envie o código para o GitHub:
   ```bash
   git add .
   git commit -m "Commit inicial"
   git push -u origin main
   ```

### Vercel

1. Crie uma conta na [Vercel](https://vercel.com/)
2. Conecte seu repositório GitHub
3. Importe o projeto
4. A Vercel detectará automaticamente que é um projeto Vite/React
5. Clique em "Deploy"

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## Contato

Seu Nome - [seu-email@exemplo.com](mailto:seu-email@exemplo.com)

Link do Projeto: [https://github.com/seu-usuario/world-in-green](https://github.com/seu-usuario/world-in-green)
