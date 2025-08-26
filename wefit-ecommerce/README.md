# WeMovies - Desafio Técnico WeFit

<p align="center">
  <img alt="Status do Projeto" src="https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge">
  <img alt="Linguagem Principal" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="Framework" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="Estilização" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
</p>

<br>

Este projeto é a implementação de um desafio técnico proposto pela **WeFit**, consistindo na criação de um e-commerce simplificado para a venda de filmes. A aplicação foi desenvolvida do zero, seguindo um protótipo no Figma e aplicando as melhores práticas do ecossistema React moderno.

## 🚀 Demonstração

Você pode acessar a aplicação em produção através do link abaixo:

**[https://wefit-ecommerce.netlify.app/](https://wefit-ecommerce.netlify.app/)**

## 📸 Preview

<p align="center">
  <img src="./preview.png" alt="Prévia da aplicação WeMovies" width="80%">
</p>
*(Substitua `preview.png` por um print ou GIF da sua aplicação)*

## ✨ Funcionalidades

* 🛍️ Visualização de produtos (filmes) carregados a partir de uma API externa.
* 🛒 Adição e remoção de itens no carrinho de compras.
* 🔢 Controle de quantidade (incremento/decremento) de cada item no carrinho.
* 📊 Cálculo de subtotal por item e do valor total do pedido em tempo real.
* 💨 Tratamento de estados de carrinho vazio e de compra finalizada com sucesso.
* 📱 Layout totalmente responsivo (Mobile-First).

## 🛠️ Tecnologias e Ferramentas

Este projeto foi construído com as seguintes tecnologias:

* **React:** Biblioteca principal para a construção da interface de usuário.
* **TypeScript:** Para tipagem estática, garantindo um código mais robusto e de fácil manutenção.
* **Vite:** Build tool moderna e ultra-rápida para o ambiente de desenvolvimento.
* **Tailwind CSS:** Framework de estilização "Utility-First" para a criação de um layout fiel ao protótipo de forma ágil.
* **Zustand:** Gerenciador de estado global minimalista e poderoso, utilizado para controlar o estado do carrinho de compras.
* **React Router DOM:** Para gerenciamento das rotas da aplicação (SPA).
* **Jest & React Testing Library:** Para a escrita de testes unitários e de componentes, garantindo a qualidade e o funcionamento da lógica de negócio.
* **Axios:** Cliente HTTP para realizar as chamadas à API de filmes.


## 🏛️ Arquitetura e Boas Práticas

Um dos focos do desafio foi a aplicação de uma arquitetura limpa e escalável. Os seguintes conceitos foram aplicados:

* **Arquitetura Modular (Feature-Based):** O código é organizado por funcionalidades (ex: `modules/cart`, `modules/movies`), aumentando a coesão do código e facilitando a manutenção e escalabilidade.
* **Separação de Responsabilidades:** Foi feita uma clara distinção entre:
    * **Componentes de UI (Presentational):** Componentes "burros" responsáveis apenas pela aparência.
    * **Lógica de Negócio (Hooks):** Hooks customizados (`useCart`, `useMovies`) que encapsulam toda a lógica, gerenciamento de estado e chamadas de API.
* **Camada de Serviço (`services`):** A comunicação com a API externa é isolada em uma camada de serviço, tornando o código agnóstico a componentes e facilmente testável.

## ⚙️ Como Rodar o Projeto Localmente

Para executar este projeto na sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/](https://github.com/)[Icaropv]/wefit-teste-ecommerce.git
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd wefit-ecommerce
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra [http://localhost:5173](http://localhost:5173) no seu navegador para ver a aplicação.

## 🧪 Como Rodar os Testes

Para executar os testes unitários e de componentes, use o comando:
```bash
npm test
```

---

Feito com ❤️ por **Icaro**.