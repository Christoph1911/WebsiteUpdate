import PropTypes from 'prop-types'
import React from 'react'
import main from '../images/main.jpg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={main} style={{"maxWidth": "100%",
        "maxHeight": "100%",
        "display": "block",
        "borderRadius": "50%"}}></img>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Christoph Paltzer</h1>
        <p>
          Hi! Nice to meet you.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
