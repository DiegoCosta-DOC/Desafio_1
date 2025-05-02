# 📝 API Tasks - Gerenciamento de Tarefas

## 📌 Sobre o projeto
Este projeto implementa uma **API RESTful** para gerenciamento de tarefas, permitindo criar, listar, atualizar e excluir tarefas.  
Desenvolvido com **Node.js** e **Express.js**, a API é simples e eficiente para manipulação de tarefas no formato JSON.

✅ Criação de tarefas  
✅ Listagem de todas as tarefas  
✅ Consulta de tarefa por ID  
✅ Atualização de tarefas existentes  
✅ Remoção de tarefas  

---

## 📂 Estrutura do projeto

📦 api-tasks ┣ 📜 server.js # Código principal do servidor ┣ 📜 README.md # Documentação do projeto ┗ 📂 node_modules # Dependências instaladas pelo npm


---

## 🛠️ Tecnologias usadas
- **Node.js** - Runtime JavaScript no servidor
- **Express.js** - Framework para criação da API
- **Middleware** - Tratamento de requisições HTTP

---

## ⚙️ Instalação e execução

### 🔹 **1. Clone o repositório**
```sh
git clone https://github.com/seu-usuario/api-tasks.git
🔹 2. Acesse a pasta do projeto
sh
cd api-tasks
🔹 3. Instale as dependências
sh
npm install
🔹 4. Inicie o servidor
sh
node server.js
🔹 O servidor rodará em http://localhost:3000.

🔗 Endpoints disponíveis
1️⃣ Criar uma tarefa
Método: POST

URL: /tasks

Body (JSON):

json
{
  "title": "Estudar Node.js",
  "description": "Aprender conceitos de API com Express.js"
}
Resposta esperada:

json
{
  "id": 1,
  "title": "Estudar Node.js",
  "description": "Aprender conceitos de API com Express.js"
}
2️⃣ Listar todas as tarefas
Método: GET

URL: /tasks

Resposta esperada:

json
[
  {
    "id": 1,
    "title": "Estudar Node.js",
    "description": "Aprender conceitos de API com Express.js"
  }
]
3️⃣ Consultar tarefa por ID
Método: GET

URL: /tasks/{id}

Exemplo: /tasks/1

Resposta esperada:

json
{
  "id": 1,
  "title": "Estudar Node.js",
  "description": "Aprender conceitos de API com Express.js"
}
4️⃣ Atualizar uma tarefa
Método: PUT

URL: /tasks/{id}

Body (JSON):

json
{
  "title": "Estudar Node.js e Express",
  "description": "Aprofundar no desenvolvimento de APIs RESTful"
}
Resposta esperada:

json
{
  "id": 1,
  "title": "Estudar Node.js e Express",
  "description": "Aprofundar no desenvolvimento de APIs RESTful"
}
5️⃣ Deletar uma tarefa
Método: DELETE

URL: /tasks/{id}

Exemplo: /tasks/1

Resposta esperada: 204 No Content

📌 Considerações finais
✅ Código estruturado e otimizado para manipulação de tarefas ✅ Middleware implementado para log de requisições ✅ API simples, leve e eficiente 🚀