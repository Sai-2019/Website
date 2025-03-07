import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Skills.css";
import { motion } from "framer-motion";

const skillsData = [
  { name: "JavaScript", category: "Full Stack Development", description: "Experienced in ES6+, async programming, and modern frameworks like React and Node.js." },
  { name: "React.js", category: "Frontend Development", description: "Building interactive and dynamic UI components with hooks, context API, and Redux." },
  { name: "Node.js", category: "Backend Development", description: "Developing scalable REST APIs, authentication, and server-side applications." },
  { name: "Express.js", category: "Backend Development", description: "Creating fast and flexible server-side applications with middleware handling." },
  { name: "SQL & NoSQL Databases", category: "Database Management", description: "Expertise in MySQL, PostgreSQL, MongoDB, and Firebase for data storage and retrieval." },
  { name: "Python & Pandas", category: "Data Analytics", description: "Processing, analyzing, and visualizing data for insights using Pandas, NumPy, and Matplotlib." },
  { name: "ETL & Data Pipelines", category: "Data Engineering", description: "Designing and maintaining ETL workflows with Apache Airflow, Talend, and DataStage." },
  { name: "Cloud Platforms", category: "Cloud Computing", description: "Experience deploying applications on AWS, GCP, and Azure using CI/CD pipelines." },
  { name: "Machine Learning", category: "Data Science", description: "Applying ML models using Scikit-learn, TensorFlow, and predictive analytics." },
  { name: "Version Control", category: "Development Tools", description: "Proficient in Git, GitHub, and GitLab for source code management." }
];

const Skills = () => {
  return (
    <Container fluid className="skills-container text-center">
      <motion.h1
        className="skills-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h1>

      <Row className="justify-content-center">
        {skillsData.map((skill, index) => (
          <Col md={6} key={index} className="mb-4">
            <motion.div
              className="skill-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>{skill.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{skill.category}</Card.Subtitle>
                  <Card.Text>{skill.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
