const Database = require('better-sqlite3');
const db = new Database('tasks.db');

// Criar a tabela de tarefas se não existir
db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL
    )
`);

module.exports = db;
// O código acima cria um banco de dados SQLite chamado "tasks.db" e uma tabela chamada "tasks" com três colunas: id, title e description. A coluna id é a chave primária e é incrementada automaticamente. As colunas title e description são obrigatórias (NOT NULL).