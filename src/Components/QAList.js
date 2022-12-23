import { Button, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function QAList({ Data, DeleteOneItem }) {
  const DeleteItem = (id) => {
    if (Data.length > 0) {
      const item = Data.findIndex((i) => i.id === id);
      Data.splice(item, 1);
      DeleteOneItem(Data);
    }
  };
  return (
    <Row className="my-3">
      <Accordion>
        {Data.map((item, i) => (
          <Accordion.Item key={i} eventKey={item.id}>
            <Accordion.Header>{item.q}</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex justify-content-between">
                <div className="py-2">{item.ans}</div>
                <Button
                  onClick={() => DeleteItem(item.id)}
                  variant="primary"
                  className=""
                >
                  Delete
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Row>
  );
}

export default QAList;
