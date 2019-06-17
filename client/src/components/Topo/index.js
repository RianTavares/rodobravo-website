import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Logo from '../../assets/logo-site.png';
import Menu from '@material-ui/icons/Menu';
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

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  window: PropTypes.func,
}

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
              <div className="menu-item">
                <Menu className="menu-item__menu"/>
              </div>
              <div className="menu-logo">
                <img className="menu-logo__logo" src={Logo} />
            </div>
            <div className="menu-desk">
              <NavLink exact className='menu-desk__item' to='/' activeClassName="underline">INÍCIO</NavLink>
              <NavLink exact className='menu-desk__item' to='/rodobravo' activeClassName="underline">QUEM SOMOS</NavLink>
              <NavLink exact className='menu-desk__item' to='/frota' activeClassName="underline">FROTA</NavLink>
              <NavLink exact className='menu-desk__item' to='/rastreio' activeClassName="underline">MONITORAMENTO</NavLink>
              <NavLink exact className='menu-desk__item' to='/servicos' activeClassName="underline">SERVIÇOS</NavLink>
              <NavLink exact className='menu-desk__item' to='/contato' activeClassName="underline">CONTATO</NavLink>
            </div>
            <div className="div-empty"></div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}