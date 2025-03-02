import React from "react";
import { Container, Button } from "react-bootstrap";

const Resume = () => {
  return (
    <Container className="text-center mt-5">
      <h1 className="display-4">My Resume</h1>
      <p>Click below to download my resume.</p>
      <Button
        variant="primary"
        href="/resume.pdf"
        target="_blank"
        download
      >
        Download Resume
      </Button>
    </Container>
  );
};

export default Resume;
