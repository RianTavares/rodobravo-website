import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Logo from '../../assets/imgs/logo-web.png';
import { NavLink } from 'react-router-dom';



function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function buttonWasClicked() { 
  const body = document.body;
  const button = document.querySelector('#button-menu');
  const slideBar = document.querySelector('#menu-slide-bar');
  let varScroll;

  if(!body.classList.contains('menu-open')) {
    varScroll = window.scrollY;
    body.style.top = '-' + varScroll + 'px';
    body.dataset.y = varScroll;
    button.classList.add('open');
    body.classList.add('menu-open');
    slideBar.classList.add('open-nav-transform');
  } else {
    button.classList.remove('open');
    body.classList.remove('menu-open');
    slideBar.classList.remove('open-nav-transform');
    body.style.top = 0;
    window.scrollTo(0, body.dataset.y);
  }

  if(!button.classList.contains('is-active')) {
    button.classList.add('is-active');
  } else {
    button.classList.remove('is-active');
  }
}

function keepScrolling() {
  const body = document.body;

  if(body.classList.contains('foto-open')) {
    body.classList.remove('foto-open');
    body.style.top = 0;
  }
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired
}

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <div className="menu-item">
                <button id="button-menu" className="menu-item__menu" type="button" onClick={buttonWasClicked}>
                  menu
                </button>
            </div>

              <div className="menu-logo">
                <img className="menu-logo__logo" src={Logo} alt="Rodobravo Transportes Logo" />
            </div>
            <div className="menu-desk">
              <NavLink onClick={keepScrolling} exact className='menu-desk__item' to='/' activeClassName="underline">INÍCIO</NavLink>
              <NavLink onClick={keepScrolling} exact className='menu-desk__item' to='/rodobravo' activeClassName="underline">QUEM SOMOS</NavLink>
              <NavLink onClick={keepScrolling} exact className='menu-desk__item' to='/frota' activeClassName="underline">FROTA</NavLink>
              <NavLink onClick={keepScrolling} exact className='menu-desk__item' to='/rastreio' activeClassName="underline">MONITORAMENTO</NavLink>
              <NavLink onClick={keepScrolling} exact className='menu-desk__item' to='/servicos' activeClassName="underline">SERVIÇOS</NavLink>
              <NavLink onClick={keepScrolling} exact className='menu-desk__item' to='/contato' activeClassName="underline">CONTATO</NavLink>
            </div>
            <div className="div-empty"></div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}