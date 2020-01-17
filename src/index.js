const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://kuniyoshi:kuniyoshi@cluster0-35amb.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json()); // use = vai ser válido pra todas as rotas
app.use(routes);
app.listen(process.env.PORT || 4444);