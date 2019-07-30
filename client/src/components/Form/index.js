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

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = async (e) => {
        e.preventDefault()
        console.log(this.state);
        const rawResponse = await fetch('/api/v1/mail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(this.state)
          });
          const content = await rawResponse.json();
          console.log(content);
          
    }   

    render() {
        const {userName, userId, subject, body } = this.state;


        return (
            <form className="last" onSubmit={this.submitHandler}>
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