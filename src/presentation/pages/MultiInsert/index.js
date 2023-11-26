import React, { useState } from "react";
import { Card, Typography } from "antd";
import InsertClients from "./interface/InsertClients";

const { Title } = Typography;

const MultiInsertPage = () => {
  return (
    <div>
      <Card>
        <Title level={3}>Agregar usuarios</Title>
        <InsertClients />
      </Card>
    </div>
  );
};

export default MultiInsertPage;
