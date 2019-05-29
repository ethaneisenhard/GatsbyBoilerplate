import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import { slide as Menu } from "react-burger-menu"
import Headroom from "react-headroom"

import "../styles/components/header.scss"
import "../styles/components/mobileMenu.scss"

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

class MobileMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    const targetBody = document.querySelector("body");
    const headroom = document.querySelector("#headroom");
    if(state.isOpen){
      disableBodyScroll(targetBody);
      headroom.classList.remove("headroom--unpinned");
      headroom.classList.add("headroom--unfixed");
      }else{
      enableBodyScroll(targetBody);
      headroom.classList.add("headroom--unpinned");
      headroom.classList.remove("headroom--unfixed");
    }
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  render() {
    return (
      <Menu  isOpen={this.state.menuOpen}
      onStateChange={(state) => this.handleStateChange(state)} id={ "mobileMenu" } width={ '100%' } right>
         <Link onClick={() => this.closeMenu()} className="features" to="/about/">About</Link>
        <Link onClick={() => this.closeMenu()} className="pricing" to="/services/">Services</Link>
        <Link onClick={() => this.closeMenu()} className="results" to="/career/">Career</Link>
        <Link onClick={() => this.closeMenu()} className="how-it-works" to="/blog/">Blog</Link>
        <Link onClick={() => this.closeMenu()} className="get-started" to="/contact/">Get Started</Link>
      </Menu>
    )
  }
}

const Header = ({ siteTitle }) => (
  <Headroom id={"headroom"}>
  <header id="navbar">
    <MobileMenu/>
    <nav className="header-nav">
      <div className="header-logo-container">
        <Link to="/">
        <Image className="header-logo" filename={"gatsby-logo.svg"} >
         {siteTitle}
        </Image>
        </Link>
      </div>
      <div className="header-menu-container">
          <Link className="features" to="/about/">About</Link>
          <Link className="pricing" to="/services/">Services</Link>
          <Link className="results" to="/career/">Career</Link>
          <Link className="how-it-works" to="/blog/">Blog</Link>
          <Link className="get-started" to="/contact/">Get Started</Link>
      </div>
    </nav>
  </header>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
