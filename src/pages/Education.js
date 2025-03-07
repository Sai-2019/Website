import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Education.css";
import { motion } from "framer-motion";

const educationData = [
  {
    institution: "Grand Valley State University",
    degree: "Master’s in Applied Computer Science",
    gpa: "GPA:3.47/4.0",
    year: "2023 - 2025",
    website: "https://www.gvsu.edu/"
  },
  {
    institution: "Geethanjali College of Engineering and Technology",
    degree: "Bachelor’s in Mechanical Engineering",
    gpa:"GPA:8.2/10.0",
    year: "2017 - 2021",
    website: "https://www.geethanjaliinstitutions.com/"
  }
];

const Education = () => {
  return (
    <Container fluid className="education-container text-center">
      <motion.h1
        className="education-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Education
      </motion.h1>

      <Row className="justify-content-center">
        {educationData.map((edu, index) => (
          <Col md={6} key={index} className="mb-4">
            <motion.div
              className="education-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.5 }}
            >
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>
                    <a href={edu.website} target="_blank" rel="noopener noreferrer" className="edu-link">
                      {edu.institution}
                    </a>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{edu.degree}</Card.Subtitle>
                  <Card.Text>{edu.gpa}</Card.Text>
                  <Card.Text>{edu.year}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Education;
