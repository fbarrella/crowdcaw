const express = require('express');
const CawController = require('./controllers/CawController');
const FavController = require('./controllers/FavController');

const routes = express.Router();

routes.get('/caws', CawController.index);
routes.post('/caws', CawController.store);
routes.post('/fav/:id', FavController.store);

module.exports = routes;