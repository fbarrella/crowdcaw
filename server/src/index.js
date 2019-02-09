const express = require('express');
const config = require('./config/config');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

const listener = server.listen(process.env.PORT || 3003, () => {
    console.log('Servidor iniciado com sucesso na porta ' + listener.address().port + '.');
});