import React, { Component } from 'react';
import './styles.css';

class Home extends Component {
    state = {
      response: ''
    };
  
    componentDidMount() {
      this.callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
    }
  
    callApi = async () => {
      const response = await fetch('/');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
  
      return body;
    };
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to HOME</h1>
          </header>
          <p className="App-intro">{this.state.response}</p>
        </div>
      );
    }
  }

  export default Home;