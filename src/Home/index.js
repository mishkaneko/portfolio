import Type from './type';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css';
import React from 'react';
import Lottie from 'lottie-react';
import codingAnimation from '../../src/@assets/animations/home-coding.json';
const Home = () => {
  return (
    <Container fluid className="home-section">
      <Container className="home-content">
        <Row>
          <Col md={7}>
            <h1>Welcome to my portfolio</h1>
            <div></div>
            <h1>
              I'm <span className="name">Grace C Chan</span>
            </h1>
            <Type />
          </Col>
          <Col md={5}>
            <Lottie animationData={codingAnimation} loop={true} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Home;
