import { Container } from 'react-bootstrap';
import './projects.css';
import { IoIosWarning } from 'react-icons/io';
import { MdConstruction } from 'react-icons/md';
import React from 'react';
import ReactPlayer from 'react-player';

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
          <p>
            The passenger and driver apps use <span className="project-highlight-lighter">&nbsp;React Native</span> with
            <span className="project-highlight-lighter">&nbsp;NativeWind</span>, while the admin web panel is built with
            <span className="project-highlight-lighter">&nbsp;Angular</span>. The application features real-time updates
            with
            <span className="project-highlight-lighter">&nbsp;Socket.IO</span>, location services via
            <span className="project-highlight-lighter">&nbsp;Google Maps API</span>, secure payments through
            <span className="project-highlight-lighter">&nbsp;Stripe</span>, a
            <span className="project-highlight-lighter">&nbsp;Java Spring Boot</span> baackend, database migration with
            <span className="project-highlight-lighter">&nbsp;Flyway</span>, and data storage in
            <span className="project-highlight-lighter">&nbsp;PostgreSQL</span>.
          </p>
          <div className="video-container">
            <ReactPlayer url="/@assets/project-videos/RideLinkerDemo.mp4" playing controls height="auto" />
          </div>
        </div>
        <div className="project-container">
          <h1>Safety Sphere</h1>
          <p>
            This mobile app caters to both urgent and non-urgent
            <span className="project-highlight">&nbsp;safety needs</span>. It features a panic button for rapid
            emergency response and provides escape route guidance. Users can access safety reports and local news to
            enhance their situational awareness.
          </p>
          <p>
            The project's front-end employs <span className="project-highlight-lighter">&nbsp;Angular</span> with
            <span className="project-highlight-lighter">&nbsp;Ant Design</span> components, while
            <span className="project-highlight-lighter">&nbsp;Playwright</span> handles web scraping, and
            <span className="project-highlight-lighter">&nbsp;Google Maps API</span> is used for data visualization and
            route generation. On the back-end, <span className="project-highlight-lighter">&nbsp;NestJS</span> drives
            the system, <span className="project-highlight-lighter">&nbsp;KnexJS</span> manages database interactions
            with <span className="project-highlight-lighter">&nbsp;PostgreSQL</span>, and
            <span className="project-highlight-lighter">&nbsp;Capacitor</span> enables cross-platform mobile
            development.
          </p>
        </div>
        <div className="project-container">
          <h1>Food Buddy</h1>
          <p>
            This web app <span className="project-highlight">&nbsp;connects food enthusiasts</span>, matching them based
            on culinary preferences, location, availability, and gender/age preferences to suggest dining partners who
            share these interests.
          </p>
          <p>
            The project involves the use of <span className="project-highlight-lighter">&nbsp;TypeScript</span>,
            <span className="project-highlight-lighter">&nbsp;ExpressJS</span>, and
            <span className="project-highlight-lighter">&nbsp;PostgreSQL</span>. It also involves
            <span className="project-highlight-lighter">&nbsp;Google Authentication</span> to reduce friction during
            registration and <span className="project-highlight-lighter">&nbsp;Socket.IO</span> for real-time chat
            functionality.
          </p>
          <div className="food-images">
            <img src={'../@assets/food-buddy/food-buddy-1.png'} alt="Food Buddy Cap Screen 1" />
            <img src={'../@assets/food-buddy/food-buddy-2.png'} alt="Food Buddy Cap Screen 1" />
          </div>
          <div className="food-message-container">
            <div className="food-message">
              <span className="message-topic">
                <span className="message-icon">
                  <IoIosWarning />
                </span>
                Undergoing Redevelopment
              </span>
              <span>Utilizing New Tech Stacks</span>
              <span>Coming to App Store and Google Play soon</span>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Projects;
