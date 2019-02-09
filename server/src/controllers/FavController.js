const Caw = require('../models/Caw');

module.exports = {
    async store(req, res) {
        const caw = await Caw.findById(req.params.id);

        caw.set({ favs: caw.favs + 1 });
        await caw.save();

        req.io.emit('fav', caw);

        return res.json(caw);
    }
};