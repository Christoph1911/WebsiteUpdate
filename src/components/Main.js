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
        Other hobbys of mine are table tennis, playing the saxophone and chess.
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
          <p>
            <p>
              Here I blog about my projects.
            </p>
            <p>
              [Saturday, 05.03.2022, 10:30]:<br />I installed pgAdmin4, a management tool for PostreSQL, with the help of their <a href="https://www.pgadmin.org/download/pgadmin-4-apt/">website </a>,
              but then decided to rather use the command line instead of a GUI.
              <br />
            </p>
            <p>
              [Friday, 04.03.2022, 17:33]:<br />I installed PostreSQL with the help of this <a href="https://www.youtube.com/watch?v=-LwI4HMR_Eg">video </a>
              and created a table with the help of this <a href="https://www.youtube.com/watch?v=RySuQtMiBxQ">video</a>.
              <br />
            </p>
            <p>
              [Friday, 04.03.2022, 15:33]:<br />I've been quite busy, but today I managed to finish a table with some dishes for my database.
              Now I will try to create a database with PostreSQL and enter my recipes.
              <br />
            </p>
            <p>
              [Sunday, 27.02.2022, 22:30]:<br />This evening I decided to start a new project. I was interested databases and APIs. So I came up with the idea of a website where I can access all my recipes on my cooking journey and always find something to eat.
              I want it to be very convenient, so I will focus on a good mobile website with great search and calculating funktions.
              First I will make a table with some recipes for the database. Then I will focus creating that database, the website and an API.
              <br />Let's see how it gows, the next week I have one week school holiday (Faschingsferien), but during the day I will study for my final exam (Abitur). I will try to work on this project in the evening.
            </p>
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
