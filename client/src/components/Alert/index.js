import React, {Component} from 'react';

class Form extends Component {
    
    closeAlert() {
        const alert = document.querySelector('.formAlert');
        if(alert) {
            if(!alert.classList.contains('notShow')) {
                alert.classList.add('notShow');
            }
        }
    }
    
    render() {
        return (
           <section className="formAlert success notShow">
               <div className="formAlert__close" onClick={this.closeAlert}>X</div>
               <h1 className="formAlert__title"> </h1>
               <p className="formAlert__text"> </p>
           </section>
        )
    }

}

export default Form;