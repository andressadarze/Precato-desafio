# Precato-desafio

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

-   `npm run dev:`
    Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor `localhost` toda a vez que o projeto for alterado e salvo.

### Criando e populando as tabelas

Acessar o arquivo `tables.sql` e executar os comandos de criação (e população, se desejar) da tabela `Precato_Forms_Answer`.

Executar as requisições através do arquivo `requests.rest` da aplicação.
