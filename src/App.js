import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { questions } from "./data";
import FormInput from "./Components/FormInput";
import QAList from "./Components/QAList";

function App() {
  const [Data, setData] = useState(questions);
  const localData = JSON.parse(localStorage.getItem("items"));

  const notify = (msg, type) => {
    if (type === "error") {
      toast.error(msg, {
        position: toast.POSITION.TOP_LEFT,
      });
    } else {
      toast.success(msg, {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };
  const AddItem = () => {
    localStorage.setItem("items", JSON.stringify([...questions]));
    setData([...questions]);
    notify("Question added successfully");
  };

  const DeleteAllItems = () => {
    localStorage.removeItem("items");
    setData([]);
    questions.splice(0, questions.length);
    setTimeout(() => notify("All questions removed successfully"), 300);
  };

  const DeleteOneItem = (newData) => {
    localStorage.setItem("items", JSON.stringify([...newData]));
    setData([...newData]);
    notify("Question removed successfully");
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
            <FormInput AddItem={AddItem} msg={(m, t) => notify(m, t)} />

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
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
