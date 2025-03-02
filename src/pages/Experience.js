import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Experience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Capgemini",
    role: "Data Analyst",
    duration: "2021 - 2023",
    description: (
      <ul>
        <li>Worked on large-scale data processing, analytics, and visualization projects. Optimized ETL pipelines and provided actionable insights.</li>
        <li>Worked on a financial project handling highly confidential data, ensuring compliance with security and privacy standards.</li>
        <li>Developed advanced analytics solutions for transaction monitoring, enhancing data accuracy and integrity.</li>
        <li>Managed data flow and architecture in the Enterprise Data Warehouse (EDW) to streamline data processing.</li>
        <li>Conducted data validation and cleansing to ensure accuracy and consistency in raw source data.</li>
        <li>Optimized data management processes, allocating appropriate storage resources for seamless system updates and deployments.</li>
        <li>Utilized DataStage, Teradata, and Oracle to enhance workflow efficiency and optimize data transformation processes.</li>
        <li>Generated comprehensive reports and dashboards to maintain data accuracy, transparency, and business insights.</li>
        <li>Resolved incidents and service requests using ServiceNow, ensuring minimal disruptions to operations.</li>
        <li>Developed, tested, and analyzed data pipelines to facilitate the smooth flow of raw data into production databases.</li>
        <li>Performed trend analysis on transactional data, identifying patterns and predicting potential issues.</li>
        <li>Applied data analysis, cleaning, and processing techniques, ensuring high-quality data integration into databases.</li>
        <li>Demonstrated strong problem-solving skills, identifying root causes, optimizing analytics structures, and managing projects to successful completion.</li>
      </ul>
    )
  },
  {
    company: "Renault Nissan",
    role: "Software Developer",
    duration: "2019 - 2021",
    description: 
    (
      <ul>
        <li>Worked on large-scale data processing, analytics, and visualization projects. Optimized ETL pipelines and provided actionable insights.</li>
        <li>Worked on a financial project handling highly confidential data, ensuring compliance with security and privacy standards.</li>
        <li>Developed advanced analytics solutions for transaction monitoring, enhancing data accuracy and integrity.</li>
        <li>Managed data flow and architecture in the Enterprise Data Warehouse (EDW) to streamline data processing.</li>
        <li>Conducted data validation and cleansing to ensure accuracy and consistency in raw source data.</li>
        <li>Optimized data management processes, allocating appropriate storage resources for seamless system updates and deployments.</li>
        <li>Utilized DataStage, Teradata, and Oracle to enhance workflow efficiency and optimize data transformation processes.</li>
        <li>Generated comprehensive reports and dashboards to maintain data accuracy, transparency, and business insights.</li>
        <li>Resolved incidents and service requests using ServiceNow, ensuring minimal disruptions to operations.</li>
        <li>Developed, tested, and analyzed data pipelines to facilitate the smooth flow of raw data into production databases.</li>
        <li>Performed trend analysis on transactional data, identifying patterns and predicting potential issues.</li>
        <li>Applied data analysis, cleaning, and processing techniques, ensuring high-quality data integration into databases.</li>
        <li>Demonstrated strong problem-solving skills, identifying root causes, optimizing analytics structures, and managing projects to successful completion.</li>
      </ul>
    )
  },
];

const Experience = () => {
  return (
    <Container fluid className="experience-container text-center">
      <motion.h1 
        className="experience-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Work Experience
      </motion.h1>

      <Row className="justify-content-center">
        {experiences.map((exp, index) => (
          <Col md={6} key={index} className="mb-4">
            <motion.div
              className="experience-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.5 }}
            >
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>{exp.company}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{exp.role}</Card.Subtitle>
                  <Card.Text>{exp.duration}</Card.Text>
                  <Card.Text>{exp.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Experience;
