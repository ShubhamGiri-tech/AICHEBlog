import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="https://aichenitrkl.github.io/">AICHE_NITRKL</a>
            <a href="www.nitrkl.ac.in">NITRKL</a>
            <a href="www.aiche.org">AICHE</a>
        </nav>
        <div>
            Social Media links
        </div>
    </header>
   )

 }

export default Header