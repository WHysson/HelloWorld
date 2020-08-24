import React from 'react';
import style from './Header.module.css'

function Header() {
  return (
    
      <header className={style.header}>
        <img src={require("./../../images/Logo1.png")} alt="logo"/>
      </header>
  
  );
}

export default Header;
