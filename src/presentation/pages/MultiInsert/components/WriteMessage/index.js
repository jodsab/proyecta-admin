import React from "react";
import { Input, Button, Row, Col, Result } from "antd";
const { TextArea } = Input;

const ResultResponse = ({ status }) => {
  return (
    <Result
      status={status}
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
  );
};

const WriteMessage = ({ insertResult }) => {
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  let status = "";
  let title = "";
  let subTitle = "";

  insertResult.error ? (status = "error") : (status = "success");
  insertResult.error ? (title = "ERROR") : (title = "EXITO");
  insertResult.error
    ? (subTitle =
        "Parece que intentas registrar clientes que ya fueron registrados")
    : (subTitle =
        "Clientes registrados con exito, ya puedes comunicarte con ellos");

  return (
    <div>
      <Result
        status={status}
        title={title}
        subTitle={subTitle}
        extra={[
          <Button type="primary" key="console">
            Atras
          </Button>,
          <Button key="buy">Ok</Button>,
        ]}
      />
    </div>
  );
};

export default WriteMessage;
