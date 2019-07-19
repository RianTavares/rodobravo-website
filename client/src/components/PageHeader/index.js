import React, { Component } from 'react';

class PageHeader extends Component {

  render() {
        return(
            <section className="pageHeader">
                <h1 className="pageHeader__text">{this.props.text}</h1>
                <div className="slide-gradiente"></div>
                <img className="pageHeader__top-image" src={this.props.img} alt="Rodobravo Transportes" />
            </section>
        )
    }
}

export default PageHeader;