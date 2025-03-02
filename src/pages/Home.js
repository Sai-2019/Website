import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Home.css";
import fullStackIcon from "../assets/web.gif";
import dataAnalyticsIcon from "../assets/data.gif";
import etlIcon from "../assets/etl.gif";
import apiIcon from "../assets/api.png";
import microservicesIcon from "../assets/microservices.png";
import trendAnalysisIcon from "../assets/trend.png";
import agileIcon from "../assets/agile.gif";
import cloudIcon from "../assets/cloud.png";

const Home = () => {
  const skills = [
    { img: fullStackIcon, title: "Full Stack Development", description: "Building interactive and scalable web applications." },
    { img: dataAnalyticsIcon, title: "Data Analytics", description: "Transforming raw data into actionable insights." },
    { img: etlIcon, title: "ETL & Data Engineering", description: "Optimizing data pipelines for efficiency." },
    { img: apiIcon, title: "API Development", description: "Creating RESTful APIs for seamless integration." },
    { img: microservicesIcon, title: "Microservices Architecture", description: "Designing modular and maintainable systems." },
    { img: trendAnalysisIcon, title: "Trend Analysis & Reporting", description: "Delivering data-driven insights for decision-making." },
    { img: agileIcon, title: "Agile Methodologies", description: "Collaborating in cross-functional teams for optimal results." },
    { img: cloudIcon, title: "Cloud & Database Management", description: "Ensuring secure and seamless data flow." },
  ];

  return (
    <Container fluid className="home-container text-center d-flex align-items-center justify-content-center flex-column">
      <h1 className="display-4 animated-text">Building Scalable Applications & Data-Driven Insights</h1>
      <p className="lead">Experienced Full Stack Developer & Data Analyst</p>
      <h6 className="section-title">What I Do:</h6>
      <Row className="justify-content-center">
        {skills.map((skill, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4 d-flex align-items-stretch">
            <Card className="skill-card text-center w-100">
              <div className="image-container d-flex justify-content-center align-items-center p-3">
                <Card.Img variant="top" src={skill.img} alt={skill.title} className="skill-icon img-fluid" />
              </div>
              <Card.Body>
                <Card.Title className="text-truncate">{skill.title}</Card.Title>
                <Card.Text className="text-muted small">{skill.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <p className="description-text">Explore my projects, skills, and experiences, and feel free to connect with me for collaboration opportunities.</p>
      <h5 className="cta-text">Let’s build something amazing together!</h5>
      <Button variant="primary" size="lg" className="mt-3" href="#contact">Contact Me</Button>
    </Container>
  );
};

export default Home;