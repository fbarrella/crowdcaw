/* 
    Crie seu banco noSQL em mongodb utilizando a ferramenta em https://mlab.com/
    e insira a url de conexão no local indicado. Depois, renomeie este arquivo
    para apenas "config.js".
*/

const mongoose = require('mongoose');

module.exports = mongoose.connect('URL DE CONEXÃO COM O BANCO', {
    useNewUrlParser: true
});