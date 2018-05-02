import React, { Component } from 'react'
import { Link, Element } from 'react-scroll'

class Header extends Component {
  render() {
    return (
      <header>
        <section class="header-content">
          <h1 class="header-title animate-pop-in">This is Yoshimoto's Profile</h1>
          <div className="scroll-btn">
            <Link activeClass="active" className="test3" to="test2" spy={true} smooth={true} duration={500} >
              <h4 class="header-subtitle animate-pop-in">My Skills</h4>
            </Link>
            <Link activeClass="active" className="test2" to="test3" spy={true} smooth={true} duration={500} >
              <h4 class="header-subtitle animate-pop-in">Portfolio</h4>
            </Link>
            <Link activeClass="active" className="test2" to="test4" spy={true} smooth={true} duration={500} >
              <h4 class="header-subtitle animate-pop-in">story</h4>
            </Link>
          </div>
          
          <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >
            <a href="#"><span></span></a>
          </Link>
        </section>
      </header>
    )
  }
}

export default Header

