import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import "../styles/components/footer.scss"

const Footer = () => (
  <footer className="hr hr--top">
    <div className="logo">
        <Link to="/">
          <Image filename={"gatsby-dark.svg"} alt={"description"}/>
        </Link>
    </div>
    <form name="contact" class="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <label for ="sign-up"> </label>
    <input type="hidden" name="sign-up" value="contact" />
        <p>Sign Up To Receive The Latest Updates</p>
        <div className="sign-up">
            <input type="email" name="email" placeholder="Email"/>
            <button type="submit">Send</button>
        </div>
    </form>
    <div className="footerMenu">
          <Link className="features" to="/about/">About</Link>
          <Link className="pricing" to="/services/">Services</Link>
          <Link className="results" href="/career/">Career</Link>
          <Link className="resources" to="/blog/">Blog</Link>
          <Link className="get-started" to="/contact/">Get Started</Link>
    </div>
    <div className="copyright">
      © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        &
        <a href="https://www.netlify.com">Netlify</a>
        &
        <a href="https://undraw.co/illustrations">UnDraw</a>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
