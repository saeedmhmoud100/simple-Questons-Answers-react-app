import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { questions } from "../data";
function FormInput({ AddItem }) {
  const [q, setq] = useState("");
  const [ans, setans] = useState("");

  onsubmit = () => {
    questions.push({ id: Math.random(), q: q, ans: ans });
    AddItem();
    setq("");
    setans("");
  };

  return (
    <Row>
      <Col sm="5">
        <Form.Control
          onChange={(e) => setq(e.target.value)}
          type="text"
          placeholder="Enter a question"
          value={q}
        />
      </Col>
      <Col sm="5">
        <Form.Control
          onChange={(e) => setans(e.target.value)}
          type="text"
          placeholder="Enter the answer"
          value={ans}
        />
      </Col>
      <Col sm="2">
        <Button
          onClick={(_) => onsubmit()}
          variant="primary"
          type="submit"
          className="w-100"
        >
          Add
        </Button>
      </Col>
    </Row>
  );
}

export default FormInput;
