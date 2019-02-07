const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://admin:ccadmin1@ds127015.mlab.com:27015/crowdcaw-db', {
    useNewUrlParser: true
});