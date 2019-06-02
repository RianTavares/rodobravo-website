const api = require('express').Router();


module.exports = () => {
    api.get('/api/mensagem', (req, res) => {
        res.send({ express: 'Hello From Express' });
    });


    return api;
};
