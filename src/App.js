import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">
              Common Questions&Answers
            </div>
          </Col>
          <Col sm="8"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
