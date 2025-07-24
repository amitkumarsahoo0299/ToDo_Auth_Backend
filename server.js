const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Database connection established successfully");
})

const usersRouter = require('./routes/users');
const todosRouter = require('./routes/todos');

app.use('/api/users', usersRouter);
app.use('/api/todos', todosRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});