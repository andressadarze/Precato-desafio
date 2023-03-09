# Precato-desafio

## Descrição do Projeto

Criação de uma API REST que realize a inscrição, caso esta seja válida, armamazenando as informações em um banco de dados relacional.

## Funcionalidades

1. Inscrição de usuários
    - A inscrição só deve ser feita com um email válido.
    - Não devem ser registradas linhas duplicadas com o mesmo email no banco de dados.
    - A propriedade "created_at" da tabela forms_answers deve ser preenchida com a data de inscrição do formulário.
    
2. Relatório de inscrições
    - Capaz de receber uma data inicial e uma data final e retorne todas as inscrições realizadas dentro desse período.
    - As datas devem ser inseridas no formato "yyyy/mm/dd"

## Instruções para rodar o projeto

### Instalando as dependências:
-   `npm install`:
    Instala todas as dependências listadas no `package.json`.

### Criando o arquivo .env:

Criar o arquivo `.env` e configurar com as informações de seu banco de dados.

```
DB_HOST = host
DB_USER = usuario
DB_PASS = senha
DB_NAME = nome-do-banco-de-dados
JWT_KEY = "minha-senha-segura"
JWT_EXPIRES_IN = "1h"
BCRYPT_COST = 12
```

### Executar o projeto:

-   `npm run dev`:
    Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor `localhost` toda a vez que o projeto for alterado e salvo.

### Criando e populando as tabelas

Acessar o arquivo `tables.sql` e executar os comandos de criação (e população, se desejar) da tabela `Precato_Forms_Answer`.

Executar as requisições através do arquivo `requests.rest` da aplicação.



