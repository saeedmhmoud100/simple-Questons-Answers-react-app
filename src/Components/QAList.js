import { Button, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function QAList() {
  return (
    <Row className="my-3">
      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Question #1</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex justify-content-between">
              <div className="py-2">the answer is</div>
              <Button variant="primary" className="">
                Delete
              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Row>
  );
}

export default QAList;
