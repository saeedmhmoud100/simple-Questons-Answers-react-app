import { Button, Col, Container, Row } from "react-bootstrap";
import FormInput from "./Components/FormInput";
import QAList from "./Components/QAList";

function App() {
  return (
    <div className="App">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center ">Common Questions</div>
          </Col>
          <Col sm="8" className="py-1">
            <FormInput />
            <QAList />
            <Button variant="primary" className="w-100">
              Delete All
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
