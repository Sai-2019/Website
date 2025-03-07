import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Projects.css";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Appointment Scheduler",
    description: "A web-based appointment scheduling system that allows users to book and manage their appointments efficiently.",
    techStack: "React, Node.js, MongoDB, Express",
    link: "#"
  },
  {
    title: "Online Food Ordering Analysis",
    description: "Data analysis project providing insights into customer preferences and order trends in food delivery platforms.",
    techStack: "Python, Pandas, Matplotlib",
    link: "#"
  }
];

const Projects = () => {
  return (
    <Container fluid className="projects-container text-center">
      <motion.h1
        className="projects-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>

      <Row className="justify-content-center">
        {projectsData.map((project, index) => (
          <Col md={6} key={index} className="mb-4">
            <motion.div
              className="project-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.5 }}
            >
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">{project.techStack}</Card.Subtitle>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
