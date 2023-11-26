import React, { useState } from "react";
import { Card, Typography } from "antd";
import WhatsappSteps from "./interface/WhatsappSteps";

const { Title } = Typography;

const WhatsappPage = () => {
  return (
    <div>
      <Card>
        <Title level={3}>Contacta a tus posibles clientes</Title>
        <WhatsappSteps />
      </Card>
    </div>
  );
};

export default WhatsappPage;
