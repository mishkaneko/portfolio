import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './ride-linker.css';
import { Link } from 'react-router-dom';
import Button from '../../@components/Button';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Features from './features';

const RideLinker = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const techStackData = [
    { filePath: '../@assets/tech-stack-icons/js.png', label: 'JavaScript' },
    { filePath: '../@assets/tech-stack-icons/react.svg', label: 'React' },
    { filePath: '../@assets/tech-stack-icons/reactnative.webp', label: 'React Native' },
    { filePath: '../@assets/tech-stack-icons/tailwind.png', label: 'Nativewind' },
    { filePath: '../@assets/tech-stack-icons/expo.png', label: 'Expo' },
    { filePath: '../@assets/tech-stack-icons/angular.svg', label: 'Angular' },
    { filePath: '../@assets/tech-stack-icons/socketio.png', label: 'Socket.IO' },
    { filePath: '../@assets/tech-stack-icons/googlemap.png', label: 'Google Map API' },
    { filePath: '../@assets/tech-stack-icons/stripe.png', label: 'Stripe API' },
    { filePath: '../@assets/tech-stack-icons/java.png', label: 'Java' },
    { filePath: '../@assets/tech-stack-icons/springboot.png', label: 'Spring Boot' },
    { filePath: '../@assets/tech-stack-icons/flyway.svg', label: 'Flyway' },
    { filePath: '../@assets/tech-stack-icons/postgresql.png', label: 'PostgreSQL' },
  ];

  const objectives = [
    {
      title: 'Enhance Cost Efficiency for Passengers',
      description: 'Alleviate the financial burden on passengers',
    },
    {
      title: 'Match Suitable Ride Buddies',
      description: 'Match users based on their starting location, destination and estimated destination arrival time',
    },
    {
      title: 'Expand Job Opportunities for Drivers',
      description: 'Address the reduction in job opportunities for drivers by offering an additional platform',
    },
    {
      title: 'Efficient Fare Sharing',
      description: 'Streamline the fare-sharing process by automatically handling the calculations',
    },
    {
      title: 'Comprehensive Project Ecosystem',
      description: 'Develop different applications for various users (passengers, drivers and admin)',
    },
  ];

  return (
    <>
      <Container fluid className="ride-linker-section">
        <Container fluid className="ride-linker-content">
          <h1>Ride Linker</h1>
          <p className="project-details">
            An app that matches passengers looking to <span className="project-highlight">share taxi fares</span>, with
            <span className="project-highlight">&nbsp;3</span> versions tailored to
            <span className="project-highlight">&nbsp;passengers</span>,
            <span className="project-highlight">&nbsp;drivers&nbsp;</span>
            and <span className="project-highlight">&nbsp;admin</span>. With the passenger's and driver's version being
            a mobile app and admin's version being a web panel.
          </p>
          <div className="project-titles">
            <h3>Why?</h3>
          </div>
          <p className="project-details">
            The idea was sparked by the <span className="project-highlight">escalating costs of taxi fares&nbsp;</span>
            for passengers and the <div className="project-highlight">limited job opportunities for drivers</div>,
            exacerbated by the emergence of services like Uber.
          </p>
          <div className="project-titles">
            <h3>Objectives</h3>
          </div>
          <ol>
            {objectives.map((objective, index) => (
              <>
                <li key={index} className="objectives-title">
                  {objective.title}
                </li>
                <ul>{objective.description && <li className="objectives-description">{objective.description}</li>}</ul>
              </>
            ))}
          </ol>
          <div className="project-titles">
            <h3>Features</h3>
          </div>
          <Features />
          <div className="project-titles">
            <h3>Demo Cap Screens</h3>
          </div>
          <div className="ride-images" data-aos="zoom-out" data-aos-duration="1500">
            <img
              className="desktop-image"
              src={'../@assets/ride-linker/ride-linker-passenger.jpg'}
              alt="Passenger's Home Page"
            />
            <img
              className="desktop-image"
              src={'../@assets/ride-linker/ride-linker-passenger-2.jpg'}
              alt="Passenger's Ride Invitation Page"
            />
            <img
              className="desktop-image"
              src={'../@assets/ride-linker/ride-linker-driver.jpeg'}
              alt="Driver's Home Page"
            />
            <img
              className="desktop-image"
              src={'../@assets/ride-linker/ride-linker-driver-2.jpg'}
              alt="Driver's Job Page"
            />
            <img
              className="desktop-image"
              src={'../@assets/ride-linker/ride-linker-admin.jpeg'}
              alt="Admin's Dashboard"
            />
            <img
              className="mobile-image"
              src={'../@assets/ride-linker/ride-linker-passenger-small.jpg'}
              alt="Passenger's Home Page"
            />
            <img
              className="mobile-image"
              src={'../@assets/ride-linker/ride-linker-passenger-2-small.jpg'}
              alt="Passenger's Ride Invitation Page"
            />
            <img
              className="mobile-image"
              src={'../@assets/ride-linker/ride-linker-driver-small.jpg'}
              alt="Driver's Home Page"
            />
            <img
              className="mobile-image"
              src={'../@assets/ride-linker/ride-linker-driver-2-small.jpg'}
              alt="Driver's Job Page"
            />
            <img
              className="mobile-image admin-image"
              src={'../@assets/ride-linker/ride-linker-admin-small.jpg'}
              alt="Admin's Dashboard"
            />
          </div>
          <div className="project-titles">
            <h3>Demo Video</h3>
          </div>
          <div className="video-container">
            <ReactPlayer url="/@assets/project-videos/RideLinkerDemo.mp4" controls height="auto" />
          </div>
          <div className="project-titles">
            <h3>ERD</h3>
          </div>
          <div className="erd" data-aos="zoom-out" data-aos-duration="1500">
            <img className="desktop-image" src={'../@assets/ride-linker/erd.png'} alt="ERD" />
            <img className="mobile-image" src={'../@assets/ride-linker/erd-small.jpg'} alt="ERD" />
          </div>
          <div className="project-titles">
            <h3>Tech Stacks</h3>
          </div>
          <p className="project-details">
            The passenger and driver apps use <span className="project-highlight-lighter">&nbsp;React Native</span> with
            <span className="project-highlight-lighter">&nbsp;NativeWind</span>, while the admin web panel is built with
            <span className="project-highlight-lighter">&nbsp;Angular</span>. The application features real-time updates
            with
            <span className="project-highlight-lighter">&nbsp;Socket.IO</span>, location services via
            <span className="project-highlight-lighter">&nbsp;Google Maps API</span>, secure payments through
            <span className="project-highlight-lighter">&nbsp;Stripe</span>, a
            <span className="project-highlight-lighter">&nbsp;Java Spring Boot</span> backend, database migration with
            <span className="project-highlight-lighter">&nbsp;Flyway</span>, and data storage in
            <span className="project-highlight-lighter">&nbsp;PostgreSQL</span>.
          </p>
          <div className="project-tech-stacks">
            {techStackData.map((tech, index) => (
              <div className="tech-container" key={index} data-aos="zoom-out" data-aos-duration="1500">
                <img src={tech.filePath} alt={tech.label} />
                <label>{tech.label}</label>
              </div>
            ))}
          </div>
          <div className="button-container">
            <Link to="/projects">
              <Button buttonContent="Back to Projects"></Button>
            </Link>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default RideLinker;
