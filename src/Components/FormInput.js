import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function FormInput() {
  return (
    <Row>
      <Col sm="5">
        <Form.Control type="text" placeholder="Enter a question" />
      </Col>
      <Col sm="5">
        <Form.Control type="text" placeholder="Enter the answer" />
      </Col>
      <Col sm="2">
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Col>
    </Row>
  );
}

export default FormInput;
