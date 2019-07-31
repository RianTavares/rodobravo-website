const api = require('express').Router();
const nodemailer = require("nodemailer");


module.exports = () => {

    api.post('/mail', (req,res) => {

            async function main(){
            let userName = req.body.userName;
            let userId = req.body.userId;
            let subject = req.body.subject;
            let body = req.body.body;
                
            let transporter = nodemailer.createTransport({
            host: 'email-ssl.com.br',
            port: 465,
            secure: true, 
            auth: {
                user: 'rian.tavares@transrodobravo.com.br', 
                pass: 'Rodobravo@rt1' 
            },
            tls: {
                rejectUnauthorized: false
            }
            });
        
            // send mail with defined transport object
            let info = await transporter.sendMail({
            from: 'rodobravo@transrodobravo.com.br', 
            to: 'rian.tavares@transrodobravo.com.br',
            subject: `Email enviado pelo site: ${subject}`, 
            text: 'Hello world?', // plain text body
            html: `<strong>Nome:</strong> ${userName} <br>
                <strong>Email do solicitante:</strong> ${userId} <br>
                <strong>Mensagem:</strong> ${body} <br>
                    `
            });
        
            console.log("Message sent: %s", info.messageId);
        
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }

        main().catch(console.error);

        // console.log(req.body);
        // res.send({ ok: 'Formulário recebido' });
        
    });

  return api;
};