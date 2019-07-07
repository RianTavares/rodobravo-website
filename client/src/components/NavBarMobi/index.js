import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBarMobi(props) {
  return (
    <React.Fragment>
              <input type="checkbox" className="menu-slide" id="menu-slide" />
              <div className="menu-slide-bar" id="menu-slide-bar">
                <nav>
                  <NavLink exact className='menu-slide-bar__link' to='/'>Início</NavLink>
                  <NavLink exact className='menu-slide-bar__link' to='/'>Quem Somos</NavLink>
                  <NavLink exact className='menu-slide-bar__link' to='/'>Frota</NavLink>
                  <NavLink exact className='menu-slide-bar__link' to='/'>Monitoramento</NavLink>
                  <NavLink exact className='menu-slide-bar__link' to='/'>Serviços</NavLink>
                  <NavLink exact className='menu-slide-bar__link' to='/'>Contato</NavLink>
                </nav>
              </div>
    </React.Fragment>
  );
}