import PropTypes from 'prop-types'
import React from 'react'
import about from '../images/about.jpg'
import contact from '../images/contact.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={about} alt="" />
          </span>
          <p>
        Currently I'm in high school and go in the 11th grade.
        I've been on a two week student exchange in Ingatestone (a small town near London), which was a very cool and interesting experience.
        I've done a one week internship at <a href="https://flowkey.breezy.hr">flowkey</a>, a startup in Berlin, where I learned to build this website and other things.
      </p>
      <p>
        I'm interested in programming and have tried a few different programming languages: C#, Java, Javascript, Python. I got into programming in school, where I started eperimenting with the Arduino.
        Other hobbys are Karate, playing the saxophone and chess. 
      </p>
      <p>
        My greatest passion is speedcubing (You try to solve the rubik's cube and other twisty puzzles as quickly as possible).
        Here you can view my <a href="https://www.worldcubeassociation.org/persons/2017PALT01">WCA profile</a>.
      </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <span className="image main">
            <img src={contact} alt="" />
          </span>
          <p>
      <a href="mailto:christophpaltzer@gmail.com">christophpaltzer@gmail.com</a>
      
      </p>
      <p>
        <a href="https://github.com/Christoph1911">Github</a>
      </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
