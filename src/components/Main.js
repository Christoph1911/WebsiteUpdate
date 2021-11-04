import PropTypes from 'prop-types'
import React from 'react'
import about from '../images/about.jpg'
import contact from '../images/contact.jpg'
import Githubicon from '../images/github.png'
import Mailicon from '../images/email.png'

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
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={about} alt="" />
          </span>
          <p>
        Currently I'm in high school in Germany and go in the 12th grade.
        I've done a one week internship at <a href="https://flowkey.breezy.hr">flowkey</a>, a startup in Berlin, in the development department. It gave me a detailed insight into the professional field of a software engineer.
        I also built this website, learned the basics of machine learning and other things.
      </p>
      <p>
        I'm interested in programming and have tried a few different programming languages: C#, Java, Javascript, Python. I got into programming in school in the 8th grade, where I started experimenting with the Arduino.
        In the 11th grade I learned the basics of Java.
        Lately I've had a lot of fun with game development. <a href="https://christoph191103.itch.io">Here</a> you can have a look at a little game I created with C# and Unity.
      </p>
      <p>
        Other hobbys of mine are table tennis, Karate, playing the saxophone and chess.
        I also enjoy speedcubing. You try to solve the Rubik's cube and other puzzles as quickly as possible. Competitions are held all over the world. <a href="https://www.worldcubeassociation.org/persons/2017PALT01">Here</a> you can view my WCA profile.
      </p>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={about} alt="" />
          </span>
          <p>
        Currently I'm in high school in Germany and go in the 12th grade.
        I've done a one week internship at <a href="https://flowkey.breezy.hr">flowkey</a>, a startup in Berlin, in the development department. It gave me a detailed insight into the professional field of a software engineer.
        I also built this website, learned the basics of machine learning and other things.
      </p>
      <p>
        I'm interested in programming and have tried a few different programming languages: C#, Java, Javascript, Python. I got into programming in school in the 8th grade, where I started experimenting with the Arduino.
        In the 11th grade I learned the basics of Java.
        Lately I've had a lot of fun with game development. <a href="https://christoph191103.itch.io">Here</a> you can have a look at a little game I created with C# and Unity.
      </p>
      <p>
        Other hobbys of mine are table tennis, Karate, playing the saxophone and chess.
        I also enjoy speedcubing. You try to solve the Rubik's cube and other puzzles as quickly as possible. Competitions are held all over the world. <a href="https://www.worldcubeassociation.org/persons/2017PALT01">Here</a> you can view my WCA profile.
      </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <span className="image main">
            <img src={contact} alt="" />
          </span>
          <p> 
            <a href="mailto:christophpaltzer@gmail.com" style={{margin: 100}}><img src={Mailicon} alt="" /></a>
            <a href="https://github.com/Christoph1911" style={{margin: 100}}><img src={Githubicon} alt=""/></a> 
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
