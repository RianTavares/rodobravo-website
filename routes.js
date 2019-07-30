const api = require('express').Router();

module.exports = () => {

    api.post('/mail', (req,res) => {
        console.log(req.body);
        res.send({ ok: 'Formulário recebido' });
        
    });

  return api;
};