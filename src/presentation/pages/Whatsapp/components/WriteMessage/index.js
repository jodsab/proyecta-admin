import React from "react";
import { Input, Button, Row, Col } from "antd";
const { TextArea } = Input;

const WriteMessage = () => {
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <div>
      <TextArea
        showCount
        maxLength={100}
        style={{
          height: 120,
          resize: "none",
        }}
        onChange={onChange}
        placeholder="disable resize"
        className="mb-24"
      />
      <Row justify="end">
        <Col>
          <Button className="mt-24" type="primary">
            Enviar mensaje
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default WriteMessage;
