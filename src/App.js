import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FormInput from "./Components/FormInput";
import QAList from "./Components/QAList";
import { questions } from "./data";
function App() {
  const [Data, setData] = useState(questions);
  const AddItem = () => {
    setData([...questions]);
  };
  return (
    <div className="App">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center ">Common Questions</div>
          </Col>
          <Col sm="8" className="py-1">
            <FormInput AddItem={AddItem} />

            {Data.length < 1 ? (
              <h2 className="text-center my-5 fs-3">There are no questions</h2>
            ) : (
              <>
                <QAList Data={Data} />
                <Button variant="primary" className="w-100">
                  Delete All
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
