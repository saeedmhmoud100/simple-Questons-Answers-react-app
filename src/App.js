import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FormInput from "./Components/FormInput";
import QAList from "./Components/QAList";
import { questions } from "./data";
function App() {
  const [Data, setData] = useState(questions);
  const localData = JSON.parse(localStorage.getItem("items"));
  const AddItem = () => {
    localStorage.setItem("items", JSON.stringify([...questions]));
    setData([...questions]);
  };

  const DeleteAllItems = () => {
    localStorage.removeItem("items");
    setData([]);
    questions.splice(0, questions.length);
  };
  const DeleteOneItem = (newData) => {
    localStorage.setItem("items", JSON.stringify([...newData]));
    setData([...newData]);
    console.log(localData);
    if (localData.length <= 1) {
      DeleteAllItems();
    }
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

            {localData == null ? (
              <h2 className="text-center my-5 fs-3">There are no questions</h2>
            ) : (
              <>
                <QAList Data={localData} DeleteOneItem={DeleteOneItem} />
                <Button
                  onClick={DeleteAllItems}
                  variant="primary"
                  className="w-100"
                >
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
