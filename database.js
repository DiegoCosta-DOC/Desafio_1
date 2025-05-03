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