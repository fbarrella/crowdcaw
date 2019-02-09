const Caw = require('../models/Caw');

module.exports = {
    async index(req, res) {
        const caws = await Caw.find({}).sort('-createdAt');

        return res.json(caws);
    },
    async store(req, res) {
        const caw = await Caw.create(req.body);

        req.io.emit('caw', caw);

        return res.json(caw);
    }
};