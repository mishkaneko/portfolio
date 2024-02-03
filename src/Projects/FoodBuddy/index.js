import { Container } from 'react-bootstrap';
import './food-buddy.css';
import { Link } from 'react-router-dom';
import Button from '../../@components/Button';
import { IoIosWarning } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FoodBuddy = () => {
  const techStackData = [
    { filePath: '../@assets/tech-stack-icons/ts.png', label: 'TypeScript' },
    { filePath: '../@assets/tech-stack-icons/express.png', label: 'Express' },
    { filePath: '../@assets/tech-stack-icons/postgresql.png', label: 'PostgreSQL' },
    { filePath: '../@assets/tech-stack-icons/socketio.png', label: 'Socket.IO' },
  ];

  const objectives = [
    {
      title: 'Culinary Compatibility',
      description: 'Match users based on similar culinary interests to ensure an enjoyable dining experience',
    },
    {
      title: 'Location-Based Matching',
      description: 'Connect users within common geographic areas to make dining arrangements accessible',
    },
    {
      title: 'Demographic Considerations',
      description: 'Match users based on age and gender preferences to create comfortable dining pairings',
    },
    {
      title: 'Efficient Matching Process',
      description:
        'Expedite the matching process by allowing users to select potential partners based on their availability dates',
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container fluid className="food-buddy-section">
      <Container fluid className="food-buddy-content">
        <h1>Food Buddy</h1>
        <p className="project-details">
          This web app <span className="project-highlight">&nbsp;connects food enthusiasts</span>, matching them based
          on culinary preferences, location, availability, and gender/age preferences to suggest dining partners who
          share these interests.
        </p>
        <div className="project-titles">
          <h3>Why?</h3>
        </div>
        <p className="project-details">
          Inspired by a personal need to find a <span className="project-highlight">meal companion</span> for trying out
          specific restaurants that my friends were not keen on exploring. I aimed to create an
          <span className="project-highlight">alternative to dating apps</span> since I observed that using traditional
          dating apps for this purpose often resulted in misunderstandings and awkward situations.
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
          <h3>Demo Cap Screens</h3>
        </div>
        <div className="food-images" data-aos="zoom-out" data-aos-duration="1500">
          <img className="desktop-image" src={'../@assets/food-buddy/food-buddy-1.png'} alt="Matching Options Page" />
          <img className="desktop-image" src={'../@assets/food-buddy/food-buddy-2.png'} alt="Match Reviews" />
          <img className="desktop-image" src={'../@assets/food-buddy/food-buddy-3.png'} alt="Match Invitation" />{' '}
          <img
            className="mobile-image"
            src={'../@assets/food-buddy/food-buddy-1-small.jpg'}
            alt="Matching Options Page"
          />
          <img className="mobile-image" src={'../@assets/food-buddy/food-buddy-2-small.jpg'} alt="Match Reviews" />
          <img className="mobile-image" src={'../@assets/food-buddy/food-buddy-3-small.jpg'} alt="Match Invitation" />
        </div>
        <div className="project-titles">
          <h3>ERD</h3>
        </div>
        <div className="erd" data-aos="zoom-out" data-aos-duration="1500">
          <img className="desktop-image" src={'../@assets/food-buddy/erd.png'} alt="ERD" />
          <img className="mobile-image" src={'../@assets/food-buddy/erd-small.jpg'} alt="ERD" />
        </div>
        <div className="project-titles">
          <h3>Tech Stacks</h3>
        </div>
        <p className="project-details">
          The project involves the use of <span className="project-highlight-lighter">&nbsp;TypeScript</span>,
          <span className="project-highlight-lighter">&nbsp;ExpressJS</span>, and
          <span className="project-highlight-lighter">&nbsp;PostgreSQL</span>. It also involves
          <span className="project-highlight-lighter">&nbsp;Google Authentication</span> to reduce friction during
          registration and <span className="project-highlight-lighter">&nbsp;Socket.IO</span> for real-time chat
          functionality.
        </p>
        <div className="project-tech-stacks">
          {techStackData.map((tech, index) => (
            <div className="tech-container" key={index} data-aos="zoom-out" data-aos-duration="1500">
              <img src={tech.filePath} alt={tech.label} />
              <label>{tech.label}</label>
            </div>
          ))}
        </div>
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
          <Link to="/projects">
            <Button buttonContent="Back to Projects"></Button>
          </Link>
        </div>
      </Container>
    </Container>
  );
};

export default FoodBuddy;
