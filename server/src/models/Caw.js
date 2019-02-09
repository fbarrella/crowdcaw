const mongoose = require('mongoose');

const CawSchema = new mongoose.Schema({
    author : String,
    desc : String,
    favs: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Caw", CawSchema);