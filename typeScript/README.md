# TDD com Typescript

## Criando Projeto

- Iniciando projeto node:
    ```bash
    npm init
    ```

- Instalando o TypeScript e Jest:
    ```bash
    npm install --save-dev typescript ts-jest @types/jest
    ```

- Criando arquivo de configuração do TypeScript:
    ```bash
    npx tsc --init
    ```

- Criando arquivo de configuração do Jest:
    ```bash
    npx ts-jest --init
    ```
- Criar uma pasta chamada `src` na raiz do projeto.

- Criar dentro da `src` um arquivo chamado `index.ts`.
    > Arquivo onde criaremos nossas funções.
- Criar dentro da `src` uma pasta chamada `tests`.

- Criar dentro da pasta `tests` um arquivo chamado `index.test.ts`.
    > Arquivo onde criaremos nossos testes.

## Configurando Projeto

- Adicionar a linha abaixo no `package.json` dentro da {} de scripts.

    ```json
    "build": "tsc",
    ```
- Também no `package.json` dentro da {} de scripts. Adicionar ou alterar a linha que tem `"test"` setando para `"jest"`.

    ```json
    "test": "jest",
    ```

## Como rodar?
- Para rodar os teste:
    ```bash
    npm test
    ```
- Para compilar o código `typescript` para `javascript`.

    ```bash
    npm run build
    ```