const express = require('express');
const app = express();
const port = 3000;// Middleware para parsing de JSON
app.use(express.json());
// Armazenamento simples de tarefas
let tasks = [];
// POST /tasks - Adicionar nova tarefa
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
return res.status(400).send('O título e a descrição são obrigatórios.');
}
const newTask = { id: tasks.length + 1, title, description };
    tasks.push(newTask);
    res.status(201).json(newTask);
});
// GET /tasks - Listar todas as tarefas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});
// GET /tasks/:id - Exibir tarefa específica
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id ===
        parseInt(req.params.id));
    if (!task) {
        return res.status(404).send('Tarefa não encontrada.');
    }
    res.json(task);
});
// PUT /tasks/:id - Atualizar tarefa existente
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id ===
        parseInt(req.params.id));
    if (!task) {
        return res.status(404).send('Tarefa não encontrada.');
    }
    const { title, description } = req.body;
        task.title = title || task.title;
        task.description = description || task.description;
        res.json(task);
});
// DELETE /tasks/:id - Deletar tarefa
app.delete('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id ===
        parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send('Tarefa não encontrada.');
    }
    tasks.splice(index, 1);
    res.status(204).send();
});
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
