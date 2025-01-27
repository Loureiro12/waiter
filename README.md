# Waiter-App

Este projeto foi desenvolvido com o objetivo de ajudar na organização dos pedidos de restaurantes ou delivery, oferecendo uma solução integrada e eficiente para gerenciamento de pedidos. O sistema é composto por três principais componentes, cada um com funcionalidades específicas para atender diferentes necessidades:

- Aplicativo Mobile (React Native):

  - Focado em entregar praticidade para o gerenciamento de pedidos em tempo real diretamente na palma da mão.
  - Ideal para uso por entregadores ou funcionários responsáveis pela organização de pedidos.

- API (Node.js com Express):

  - Atua como o coração do sistema, gerenciando a comunicação entre o aplicativo mobile, o sistema web e o banco de dados.
  - Garantia de performance e segurança no processamento das solicitações.

- Sistema Web (ReactJS):
  - Ferramenta voltada para o gerenciamento de pedidos em escala, ideal para administradores e operadores.
  - Permite monitorar pedidos e realizar configurações gerais.

## Screenshots

![App Screenshot](./image/Screenshot%202025-01-27%20at%2017.58.04.png)
![App Screenshot](./image/Screenshot%202025-01-27%20at%2017.58.19.png)
![App Screenshot](./image/Screenshot%202025-01-27%20at%2017.58.53.png)

## Stack utilizada

- 📱 Aplicativo Mobile

  - Framework: React Native
  - Gerenciador de Pacotes: Expo
  - Bibliotecas Principais:
    - axios: Comunicação com a API
    - styled-components: Estilização com componentes
    - react-native-svg: Manipulação de SVGs
    - expo-font e expo-status-bar: Recursos adicionais do Expo
  - Linguagem: TypeScript

- 🌐 Frontend Web

  - Framework: ReactJS
  - Builder: Vite
  - Bibliotecas Principais:
    - axios: Comunicação com a API
    - react-toastify: Notificações visuais
    - styled-components: Estilização
    - socket.io-client: Comunicação em tempo real
  - Ferramentas de Desenvolvimento:
    - eslint: Análise estática de código
    - typescript: Tipagem estática para maior confiabilidade

- ⚙️ Backend
  - Framework: Node.js com Express
  - Banco de Dados: MongoDB (gerenciado com mongoose)
  - Bibliotecas Principais:
    - socket.io: Comunicação em tempo real
    - multer: Upload de arquivos
  - Ferramentas de Desenvolvimento:
    - nodemon: Atualização automática no desenvolvimento
    - ts-node: Execução de TypeScript no Node.js
    - eslint: Análise estática de código
    - typescript: Tipagem estática para maior confiabilidade

## Instalação

📱 Aplicativo Mobile

- Clone o repositório do app:

```bash
  git clone https://github.com/Loureiro12/waiter
  cd app
```

- Instale as dependências:

```bash
  yarn install
```

- Inicie o aplicativo:
  - Para rodar no Expo:
  ```bash
      yarn start
  ```
  - Para rodar em dispositivos específicos:
  ```bash
      yarn run android  # Android
      yarn run ios      # iOS
  ```

🌐 Frontend Web

- Clone o repositório do app:

```bash
  git clone https://github.com/Loureiro12/waiter
  cd web
```

- Instale as dependências:

```bash
  yarn install
```

- Execute o ambiente de desenvolvimento:

```bash
  yarn run dev
```

⚙️ Backend

- Clone o repositório do app:

```bash
  git clone https://github.com/Loureiro12/waiter
  cd backend
```

- Instale as dependências:

```bash
  yarn install
```

- Execute o ambiente de desenvolvimento:

```bash
  yarn dev
```

## Melhorias

- 📱 Aplicativo Mobile:

  - Adicionar notificações no app: Alertar o usuário quando o pedido estiver pronto.
  - Permitir adicionar observações aos pedidos: Usuários podem incluir detalhes específicos sobre os pedidos.

- 🖥️ Sistema Web (Administração e Gerenciamento):

  - Dashboard analítico: Incluir gráficos e relatórios para análise de faturamento, receita e métricas importantes.
  - Notificação no sistema web: Avisar os administradores em tempo real quando novos pedidos chegarem.
  - Facilidade na edição do cardápio: Permitir que o cliente admin adicione produtos ao cardápio de forma prática e intuitiva.

- 🌐 Sistema Web para Cliente Final:
  - Implementação de um sistema web para o cliente final: Permitir que consumidores façam pedidos diretamente pelo navegador.

Essas melhorias visam oferecer maior funcionalidade, facilitar a gestão de pedidos e melhorar a experiência do usuário final. 🚀

## Autores

- [@Loureiro12](https://github.com/Loureiro12)

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
