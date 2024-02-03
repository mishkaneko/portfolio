import { Container, Row, Col } from 'react-bootstrap';
import './about.css';
import Loading from '../@components/Loading';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const techStackData = [
    { filePath: '../@assets/tech-stack-icons/js.png', label: 'JavaScript' },
    { filePath: '../@assets/tech-stack-icons/ts.png', label: 'TypeScript' },
    { filePath: '../@assets/tech-stack-icons/angular.svg', label: 'Angular' },
    { filePath: '../@assets/tech-stack-icons/react.svg', label: 'React' },
    { filePath: '../@assets/tech-stack-icons/reactnative.webp', label: 'React Native' },

    { filePath: '../@assets/tech-stack-icons/expo.png', label: 'Expo' },
    {
      filePath: '../@assets/tech-stack-icons/capacitor.png',
      label: 'Capacitor',
    },
    { filePath: '../@assets/tech-stack-icons/express.png', label: 'Express' },
    { filePath: '../@assets/tech-stack-icons/nodejs.svg', label: 'NodeJS' },
    { filePath: '../@assets/tech-stack-icons/nestjs.png', label: 'NestJS' },
    { filePath: '../@assets/tech-stack-icons/postgresql.png', label: 'PostgreSQL' },
  ];

  return (
    <Container fluid className="about-section">
      {loading ? (
        <Loading loadingClass={'loading-container-inner'} />
      ) : (
        <Container className="about-content">
          <Container className="tech-section sections">
            <div className="header-container">
              <h1>Tech Stack</h1>
            </div>
            {techStackData.map((tech, index) => (
              <div className="tech-container" key={index} data-aos="zoom-out" data-aos-duration="1500">
                <img src={tech.filePath} alt={tech.label} />
                <label>{tech.label}</label>
              </div>
            ))}
          </Container>
          <Container className="education-section sections" data-aos="fade-up" data-aos-duration="2000">
            <div className="header-container">
              <h1>Education</h1>
            </div>
            <Row>
              <Col md={6} className="about-col">
                <li>
                  <h2>Micromaster in A.I. & Programming</h2>
                  <h3>Tecky Academy</h3>
                  <p>Jun 2023 - Oct 2023</p>
                </li>
              </Col>
              <Col md={6} className="about-col">
                <li>
                  <h2>Bachelor of Arts </h2>
                  <h2>(Major in American Studies)</h2>
                  <h3>The University of Hong Kong</h3>
                  <p>2017 - 2019</p>
                </li>
              </Col>
            </Row>
          </Container>
          <Container className="work-section sections" data-aos="fade-up" data-aos-duration="2000">
            <div className="header-container">
              <h1>Work Experience</h1>
            </div>
            <Row>
              <Col md={4} className="about-col">
                <li>
                  <h2>Freelance Programmer</h2>
                  <p>Jan 2024 - Present</p>
                </li>
              </Col>
              <Col md={4} className="about-col">
                <li>
                  <h2>Assistant to Solicitors</h2>
                  <h3>Rita Law & Co.</h3>
                  <p>Aug 2021 - Jun 2023</p>
                </li>
              </Col>
              <Col md={4} className="about-col">
                <li>
                  <h2>High School English Tutor</h2>
                  <h3>AlphaPlus Education</h3>
                  <p>Mar 2020 - Jul 2021</p>
                </li>
              </Col>
              <Col md={4} className="about-col">
                <li>
                  <h2>Project Coordinator</h2>
                  <h3>Spear Group Limited</h3>
                  <p>May 2019 - Mar 2020</p>
                </li>
              </Col>
            </Row>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default About;
