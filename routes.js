const api = require('express').Router();
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();

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
                user: process.env.USER_MAIL, 
                pass: process.env.PASS_MAIL
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
            res.send({'ok': 'Mensagem Enviada'});
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }

        main().catch(error => {
            res.send({'error': `${error.responseCode}`})
        });
    });

    api.get('/', function(request, response) {
        console.log('Home page visited!');
        const filePath = path.resolve(__dirname, './build', 'index.html');
      
        // read in the index.html file
        fs.readFile(filePath, 'utf8', function (err,data) {
          if (err) {
            return console.log(err);
          }
          
          // replace the special strings with server generated strings
          data = data.replace(/\$OG_TITLE/g, 'Rodobravo Transportes - Página Inicial');
          data = data.replace(/\$OG_DESCRIPTION/g, "Somos a Rodobravo Transportes, com mais de 17 anos de experiência no setor de transportes rodoviários, entendemos do seu negócio e fornecemos a solução que sua empresa precisa.");
          result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
          response.send(result);
        });
      });
      
    //   api.get('/about', function(request, response) {
    //     console.log('About page visited!');
    //     const filePath = path.resolve(__dirname, './build', 'index.html')
    //     fs.readFile(filePath, 'utf8', function (err,data) {
    //       if (err) {
    //         return console.log(err);
    //       }
    //       data = data.replace(/\$OG_TITLE/g, 'About Page');
    //       data = data.replace(/\$OG_DESCRIPTION/g, "About page description");
    //       result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
    //       response.send(result);
    //     });
    //   });
      
    //   api.get('/contact', function(request, response) {
    //     console.log('Contact page visited!');
    //     const filePath = path.resolve(__dirname, './build', 'index.html')
    //     fs.readFile(filePath, 'utf8', function (err,data) {
    //       if (err) {
    //         return console.log(err);
    //       }
    //       data = data.replace(/\$OG_TITLE/g, 'Contact Page');
    //       data = data.replace(/\$OG_DESCRIPTION/g, "Contact page description");
    //       result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
    //       response.send(result);
    //     });
    //   });

  return api;
};