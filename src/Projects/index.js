import { Container } from 'react-bootstrap';
import './projects.css';
import { IoIosWarning } from 'react-icons/io';
import { MdConstruction } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Button from '../@components/Button';

const Projects = () => {
  return (
    <Container fluid className="projects-section">
      <Container className="projects-content">
        <div className="project-message">
          <span className="message-topic">
            <span className="message-icon">
              <MdConstruction />
            </span>
            Work in Progress
          </span>
          <span>Content Updated Daily!</span>
        </div>
        <div className="project-container">
          <h1>Ride Linker</h1>
          <p>
            An app that matches passengers looking to <span className="project-highlight">share taxi fares</span>, with
            <span className="project-highlight">&nbsp;3</span> versions tailored to
            <span className="project-highlight">&nbsp;passengers</span>,
            <span className="project-highlight">&nbsp;drivers&nbsp;</span>
            and <span className="project-highlight">&nbsp;admin</span>. With the passenger's and driver's version being
            a mobile app and admin's version being a web panel.
          </p>
          <div className="button-container">
            <Link to="/projects/ride-linker">
              <Button buttonContent="Check Out More"></Button>
            </Link>
          </div>
        </div>
        <div className="project-container">
          <h1>Safety Sphere</h1>
          <p>
            A mobile app that caters to both urgent and non-urgent
            <span className="project-highlight">&nbsp;safety needs</span>. It features a panic button for rapid
            emergency response and provides escape route guidance. Users can also access safety reports and local news
            to enhance their situational awareness.
          </p>
          <div className="button-container">
            <Link to="/projects/safety-sphere">
              <Button buttonContent="Check Out More"></Button>
            </Link>
          </div>
        </div>
        <div className="project-container">
          <h1>Food Buddy</h1>
          <p>
            This web app <span className="project-highlight">&nbsp;connects food enthusiasts</span>, matching them based
            on culinary preferences, location, availability, and gender/age preferences to suggest dining partners who
            share these interests.
          </p>
          <div className="food-message-container">
            <div className="food-message">
              <span className="message-topic">
                <span className="message-icon">
                  <IoIosWarning />
                </span>
                Undergoing Redevelopment
              </span>
              <span>Coming to App Store and Google Play soon</span>
            </div>
          </div>
          <div className="button-container">
            <Link to="/projects/food-buddy">
              <Button buttonContent="Check Out More"></Button>
            </Link>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Projects;
