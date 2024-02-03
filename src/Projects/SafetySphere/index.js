import { Container } from 'react-bootstrap';
import './safety-sphere.css';
import { Link } from 'react-router-dom';
import Button from '../../@components/Button';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SafetySphere = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const techStackData = [
    { filePath: '../@assets/tech-stack-icons/ts.png', label: 'TypeScript' },
    { filePath: '../@assets/tech-stack-icons/angular.svg', label: 'Angular' },
    { filePath: '../@assets/tech-stack-icons/antdesign.png', label: 'Ant Design' },
    { filePath: '../@assets/tech-stack-icons/playwright.png', label: 'Playwright' },
    { filePath: '../@assets/tech-stack-icons/googlemap.png', label: 'Google Map API' },
    { filePath: '../@assets/tech-stack-icons/nestjs.png', label: 'NestJS' },
    { filePath: '../@assets/tech-stack-icons/knex.png', label: 'KnexJS' },
    { filePath: '../@assets/tech-stack-icons/postgresql.png', label: 'PostgreSQL' },
    {
      filePath: '../@assets/tech-stack-icons/capacitor.png',
      label: 'Capacitor',
    },
  ];

  const objectives = [
    {
      title: 'Centralized Safety Hub',
      description: 'Aggregate all local safety-related news within a dedicated application',
    },
    {
      title: 'User-Generated Reporting',
      description:
        'Empower users to actively participate in the safety ecosystem by allowing them to report their safety concerns and experiences',
    },
    {
      title: 'Customizable Filtering',
      description:
        'Enable users to filter safety incidents based on types, locations and sources (official news or user reports), allowing individuals to focus on safety information that aligns with their specific concerns',
    },
  ];

  return (
    <Container fluid className="safety-sphere-section">
      <Container fluid className="safety-sphere-content">
        <h1>Safety Sphere</h1>
        <p className="project-details">
          This mobile app caters to both urgent and non-urgent
          <span className="project-highlight">&nbsp;safety needs</span>. It features a panic button for rapid emergency
          response and provides escape route guidance. Users can access safety reports and local news to enhance their
          situational awareness.
        </p>
        <div className="project-titles">
          <h3>Why?</h3>
        </div>
        <p className="project-details">
          Crucial safety information and updates are <span className="project-highlight">time-sensitive</span>, yet
          frequently <span className="project-highlight">dispersed</span> across various platforms. Recognizing the
          urgency and importance of such updates, there is a need to consolidate safety-related news for users.
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
        <div className="safety-images" data-aos="zoom-out" data-aos-duration="1500">
          <img className="desktop-image" src={'../@assets/safety-sphere/safety-sphere-1.png'} alt="Menu Screen" />
          <img className="desktop-image" src={'../@assets/safety-sphere/safety-sphere-2.png'} alt="Escape Route" />
          <img className="desktop-image" src={'../@assets/safety-sphere/safety-sphere-3.png'} alt="Menu Screen" />
          <img className="desktop-image" src={'../@assets/safety-sphere/safety-sphere-4.png'} alt="Escape Route" />
          <img className="mobile-image" src={'../@assets/safety-sphere/safety-sphere-1-small.jpg'} alt="Menu Screen" />
          <img className="mobile-image" src={'../@assets/safety-sphere/safety-sphere-2-small.jpg'} alt="Escape Route" />
          <img className="mobile-image" src={'../@assets/safety-sphere/safety-sphere-3-small.jpg'} alt="Menu Screen" />
          <img className="mobile-image" src={'../@assets/safety-sphere/safety-sphere-4-small.jpg'} alt="Escape Route" />
        </div>
        <div className="project-titles">
          <h3>Tech Stacks</h3>
        </div>
        <p className="project-details">
          The project's front-end employs <span className="project-highlight-lighter">&nbsp;Angular</span> with
          <span className="project-highlight-lighter">&nbsp;Ant Design</span> components, while
          <span className="project-highlight-lighter">&nbsp;Playwright</span> handles web scraping, and
          <span className="project-highlight-lighter">&nbsp;Google Maps API</span> is used for data visualization and
          route generation. On the back-end, <span className="project-highlight-lighter">&nbsp;NestJS</span> drives the
          system, <span className="project-highlight-lighter">&nbsp;KnexJS</span> manages database interactions with{' '}
          <span className="project-highlight-lighter">&nbsp;PostgreSQL</span>, and
          <span className="project-highlight-lighter">&nbsp;Capacitor</span> enables cross-platform mobile development.
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
  );
};

export default SafetySphere;
