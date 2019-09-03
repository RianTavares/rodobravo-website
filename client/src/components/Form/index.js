import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Form extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            userName: '',
            userId: '',
            subject: '',
            body: ''
        }
    }

    onFieldChange(fieldName) {
        return function (event) {
            this.setState({[fieldName]: event.target.value});
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    cleanInput = e => {
        this.setState({[e]: ''})
    }

    submitHandler = async (e) => {
        e.preventDefault();
        //alert fields
        const alertTitle = document.querySelector('.formAlert > .formAlert__title');
        const alertMessage = document.querySelector('.formAlert > .formAlert__text');
        const alert = document.querySelector('.formAlert');
        if(!alert.classList.contains('notShow')) {
            alert.classList.add('notShow');
        }

        //validating front of the form
        const validation = this.formFrontvalidation(this.state);
        
        //form fields
        const userName = document.getElementsByName('userName');
        const userId = document.getElementsByName('userId');
        const subject = document.getElementsByName('subject');
        const message = document.getElementsByName('body');
        const formButton = document.querySelector('#form > button');

        if(validation === 'true') {
            if(!formButton.classList.contains('button-disable')) {
                formButton.classList.add('button-disable');
            }
            // do the request to server
            const formRequestResponse = await fetch('/api/v1/mail', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            });
            //answer from the server ok or error
            const content = await formRequestResponse.json();

            if(typeof content.ok !== 'undefined') {

                if(formButton.classList.contains('button-disable')) {
                    formButton.classList.remove('button-disable');
                }

                this.cleanInput(userName[0].attributes.name.nodeValue);
                this.cleanInput(userId[0].attributes.name.nodeValue);
                this.cleanInput(subject[0].attributes.name.nodeValue);
                this.cleanInput(message[0].attributes.name.nodeValue);

                alertMessage.innerHTML = "Mensagem enviada com sucesso"
                alertTitle.innerHTML = "Tudo Certo!"

                if (!alert.classList.contains('success')) {
                    alert.classList.add('success');
                }

                if(alert.classList.contains('fail')) {
                    alert.classList.remove('fail');
                }
                if(alert.classList.contains('notShow')) {
                    alert.classList.remove('notShow');
                }
            } else if(typeof content.error !== 'undefined') {
                //errors coming from server
                alertMessage.innerHTML = `Tivemos um problema com nosso sevidor de Email. 
                Por favor, tente de novo dentro de alguns minutos ou entre em contato conosco
                através de nossos telefones`;
                alertTitle.innerHTML = "Ops!"

                if (!alert.classList.contains('fail')) {
                    alert.classList.add('fail');
                }

                if(alert.classList.contains('success')) {
                    alert.classList.remove('success');
                }
                if(alert.classList.contains('notShow')) {
                    alert.classList.remove('notShow');
                }
            }
        } else {
            alertMessage.innerHTML = validation;
            alertTitle.innerHTML = "Ops!"

            if (!alert.classList.contains('fail')) {
                alert.classList.add('fail');
            }

            if(alert.classList.contains('success')) {
                alert.classList.remove('success');
            }
            if(alert.classList.contains('notShow')) {
                alert.classList.remove('notShow');
            }
        }

    }  
    
    formFrontvalidation = (e) => {

        let user = e.userId.substring(0, e.userId.indexOf("@"));
        let domain = e.userId.substring(e.userId.indexOf("@")+ 1, e.userId.length);

        if((!e.userName || e.userName.trim().length === 0) && (!e.userId || e.userId.trim().length === 0)
            && (!e.subject || e.subject.trim().length === 0) && (!e.body || e.body.trim().length === 0)) {
            return 'Por favor, preencha todos os campos corretamente e envie sua mensagem novamente!';
        } else if(!e.userName || e.userName.trim().length === 0) {
            return 'Por favor, nos diga seu nome para que possamos atendê-lo melhor!';
        } else if(!e.userId || e.userId.trim().length === 0) {
            return 'Por favor, nos diga seu email para que possamos lhe responder!';
        } else if(!e.subject || e.subject.trim().length === 0) {
            return 'Por favor, insira um assunto antes de enviar sua mensagem!';
        } else if(!e.body || e.body.trim().length === 0) {
            return 'Por favor, precisamos que você escreva sua mensagem para que possamos lhe responder!';
        } else if(e.userId || e.userId.trim().length === 0){
            if ((user.length >=1) &&
                (domain.length >=3) && 
                (user.search("@")===-1) && 
                (domain.search("@")===-1) &&
                (user.search(" ")===-1) && 
                (domain.search(" ")===-1) &&
                (domain.search(".")!==-1) &&      
                (domain.indexOf(".") >=1)&& 
                (domain.lastIndexOf(".") < domain.length - 1)) {
                    console.log("E-mail valido");
                    return 'true';
            } else {
                return 'Por favor, digite um Email válido para que possamos lhe responder!'
            }
        }

        return 'true';
    }

    render() {
        const {userName, userId, subject, body } = this.state;


        return (
            <form id="form" onSubmit={this.submitHandler}>
                <TextField
                    value={userName}
                    name="userName"
                    onChange={this.changeHandler}
                    id="outlined-name"
                    label="Nome"
                    className="{classes.textField}"
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    value={userId}
                    name="userId"
                    onChange={this.changeHandler}
                    id="outlined-email"
                    label="Email"
                    className="{classes.textField}"
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    value={subject}
                    name="subject"
                    onChange={this.changeHandler}
                    id="outlined-assunto"
                    label="Assunto"
                    className="{classes.textField}"
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    value={body}
                    name="body"
                    onChange={this.changeHandler}
                    id="outlined-dense-multiline"
                    label="Mensagem"
                    className="{clsx(classes.textField, classes.dense)}"
                    margin="dense"
                    variant="outlined"
                    multiline
                    rowsMax="4"
                />

                <Button type="submit" variant="contained">
                    Enviar
                </Button>
            </form> 
        )
    }

}

export default Form;