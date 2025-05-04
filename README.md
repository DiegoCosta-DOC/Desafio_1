## API de Gerenciamento de Tarefas (Node.js, Express e SQLite)

API RESTful simples para gerenciar tarefas (CRUD) utilizando Node.js, Express e SQLite.

### Tecnologias

* Node.js
* Express
* better-sqlite3

### Como Executar

1.  **Clone:** `git clone [https://github.com/DiegoCosta-DOC/Desafio_1.git]`
2.  **Instale:** `npm install` ou `yarn install`
3.  **Execute:** `node index.js` ou `npm start` ou `yarn start`

A API estará rodando em `http://localhost:3000`.

### Endpoints

* `POST /tasks`: Adiciona tarefa (body: `{ title, description }`)
* `GET /tasks`: Lista tarefas
* `GET /tasks/:id`: Exibe tarefa
* `PUT /tasks/:id`: Atualiza tarefa (body: `{ title?, description? }`)
* `DELETE /tasks/:id`: Deleta tarefa

### Testando a API com Postman

Use o Postman para interagir com os endpoints:

1.  **POST /tasks**: Body (JSON) `{ "title": "...", "description": "..." }`
    * Resposta 201 Created + tarefa criada.
2.  **GET /tasks**: Lista todas as tarefas (Resposta 200 OK + array de tarefas).
3.  **GET /tasks/:id**: Exibe tarefa (Resposta 200 OK + tarefa).
4.  **PUT /tasks/:id**: Body (JSON) `{ "title"?: "...", "description"?: "..." }`
    * Resposta 200 OK + tarefa atualizada.
5.  **DELETE /tasks/:id**: Resposta 204 No Content (sucesso).

### Demonstração (curl)

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title": "Tarefa Exemplo", "description": "Descrição da tarefa"}' http://localhost:3000/tasks
curl http://localhost:3000/tasks
curl http://localhost:3000/tasks/1
curl -X PUT -H "Content-Type: application/json" -d '{"title": "Tarefa Atualizada"}' http://localhost:3000/tasks/1
curl -X DELETE http://localhost:3000/tasks/1


Considerações

A estrutura do código, com a separação da lógica de banco de dados (database.js) e da lógica da API (index.js), visa a organização e a manutenibilidade. O tratamento de erros básico e a validação de entrada demonstram uma preocupação com a robustez da API.

Este projeto serve como uma base sólida para futuras expansões e implementações mais complexas.