const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const db = require('./database');

// Função auxiliar para buscar uma tarefa por ID
function getTaskById(id) {
    return db.prepare('SELECT * FROM tasks WHERE id = ?').get(id);
}

// POST /tasks - Adicionar nova tarefa
app.post('/tasks', (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).send('O título e a descrição são obrigatórios.');
        }

        const stmt = db.prepare('INSERT INTO tasks (title, description) VALUES (?, ?)');
        const result = stmt.run(title, description);

        const newTask = { id: result.lastInsertRowid, title, description };
        res.status(201).json(newTask);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno no servidor.');
    }
});

// GET /tasks - Listar todas as tarefas
app.get('/tasks', (req, res) => {
    try {
        const tasks = db.prepare('SELECT * FROM tasks').all();
        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno no servidor.');
    }
});

// GET /tasks/:id - Exibir tarefa específica
app.get('/tasks/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).send('ID inválido.');
        }

        const task = getTaskById(id);
        if (!task) {
            return res.status(404).send('Tarefa não encontrada.');
        }

        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno no servidor.');
    }
});

// PUT /tasks/:id - Atualizar tarefa existente
app.put('/tasks/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).send('ID inválido.');
        }

        const task = getTaskById(id);
        if (!task) {
            return res.status(404).send('Tarefa não encontrada.');
        }

        if (!req.body.title && !req.body.description) {
            return res.status(400).send('É necessário enviar pelo menos um campo para atualização.');
        }

        const title = req.body.title || task.title;
        const description = req.body.description || task.description;

        const stmt = db.prepare('UPDATE tasks SET title = ?, description = ? WHERE id = ?');
        stmt.run(title, description, id);

        res.json({ id, title, description });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno no servidor.');
    }
});

// DELETE /tasks/:id - Deletar tarefa
app.delete('/tasks/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).send('ID inválido.');
        }

        const stmt = db.prepare('DELETE FROM tasks WHERE id = ?');
        const result = stmt.run(id);

        if (result.changes === 0) {
            return res.status(404).send('Tarefa não encontrada.');
        }

        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno no servidor.');
    }
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
