import React, { useState } from "react";
import { Card, Typography } from "antd";
import WhatsappSteps from "./interface/WhatsappSteps";

const { Title } = Typography;

const WhatsappPage = () => {
  return (
    <div>
      <Card>
        <Title level={3}>Importa archivos de Excel para whatsapp</Title>
        <WhatsappSteps />
      </Card>
    </div>
  );
};

export default WhatsappPage;
