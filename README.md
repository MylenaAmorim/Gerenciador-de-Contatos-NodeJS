# SoftMakers Contatos

## Projeto

O SoftMakers Contatos é uma aplicação web de cadastro e gerenciamento de contatos, que ajuda na organização e armazenamento dos dados do contato.

## Desenvolvimento

### Desenvolvimento back-end:
   Desenvolvido em Node.js, usando o web framework ExpressJS e o banco de dados não-relacional MongoDB para criação de um CRUD(Create, Read, Update e Remove). 
   A aplicação é capaz de cadastrar novos contatos, alterar os contatos, listar os contatos(com paginação) e deletar contatos, onde o cadastro tem os seguintes campos:
   - Foto do contato;
   - Nome do contato;
   - Sobrenome do contato;
   - Telefone do contato;
   - E-mail do contato;
   - Endereço do contato.
   
### Desenvolvimento front-end:
  Construção da interface desenvolvida através do recurso de partial views do EJS (view-engine qusada com o ExpressJS)
  e junto com o framework front-end Bootstrap, muito utilizado mundialmente para estruturar aplicações web responsivas.
  
## Instruções necessárias para rodar a aplicação

Clonar o repositório:
```
git clone https://github.com/MylenaAmorim/Gerenciador-de-Contatos.git SoftMakers-Contatos
```
### Instalação, Tecnologias e Depedências
 - Baixar e instalar o Node.js (https://nodejs.org/en/download/current/);
 - Entrar na pasta SoftMakers-Contatos;
 - No terminal de linha de comando e, dentro da pasta do projeto, digitar:
 ```npm start```
 - Baixar o MongoDB Community Server (https://www.mongodb.com/try/download/community);
 - Criar pasta data dentro da pasta onde foi salvo o repositório:
 ```mkdir data```
 - Executar o Mongo:
   - Entrar na pasta bin do MongoDB  que normalmente fica em C:\Program Files\MongoDB\Server\4.4\bin
   - No prompt de comando do Windows executar e deixar o cmd aperto para iniciar o servidor do Mongo:
   ```mongod.exe```
   - Em outro prompt executar o mongo e criar o banco de dados SoftMakers-Contatos:
  ``` mongo.exe```
   ```use SoftMakers-Contatos```
   - Criar a collection do banco:
   ```db.createCollection("customers");```
  - Agora com a conexão estabelecida com o banco de dados digite ```^C``` e em seguida ```npm start``` no terminal da aplicação para reconectar;
  - Para acessar a página da aplicação digite ```http://localhost:3000/``` em seu navegador;
 
## Estratégias para melhorar a aplicação:
  Seria interessante utilizar o armazenameno em nuvem ao invés do local, assim a aplicação se tornaria mais eficaz, já que não haveria o gasto da mémoria local, além de poder ser aplicada em várias máquinas mais facilmente. Ademais, seria muito variável adicionar um mecanismo de busca na aplicação, para facilidar a busca dos contatos.
