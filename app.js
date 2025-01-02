const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let todos = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" }
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { task } = req.body;
  const newTodo = { id: todos.length + 1, task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Todo app listening at http://localhost:${port}`);
});

