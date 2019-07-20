import React, { Component } from 'react';

class PageHeader extends Component {

  render() {
        return(
            <section className="pageHeader">
                <h1 className="pageHeader__text">{this.props.text}</h1>
                <div className="slide-gradiente"></div>
                <div className="pageHeader__img" id={this.props.id}></div>
            </section>
        )
    }
}

export default PageHeader;