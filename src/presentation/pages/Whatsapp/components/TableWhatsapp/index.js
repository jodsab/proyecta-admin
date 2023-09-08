import React from "react";
import { Button, Table, Typography, Row, Col } from "antd";
import { WhatsAppOutlined, MailOutlined } from "@ant-design/icons";
import { messageType } from "../../interface/WhatsappSteps/messageType";

const { Text } = Typography;

const ICON_SIZE = 18;

const TableWhatsapp = ({
  columns,
  dataSource,
  onChangeSteps,
  setMessageType,
}) => {
  return (
    <div>
      <Row justify="end" gutter={[24, 12]}>
        <Col xs={24} sm={24} md={12} lg={8} xl={7} className="mb-24">
          <Button
            type="primary"
            style={{ width: "100%", backgroundColor: "	rgb(37, 211, 102)" }}
            onClick={() => {
              onChangeSteps(2);
              setMessageType(messageType.whatsapp);
            }}
          >
            <WhatsAppOutlined style={{ fontSize: `${ICON_SIZE}px` }} />
            Enviar mensaje por WhatsApp
          </Button>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={7} className="mb-24">
          <Button
            type="primary"
            style={{ width: "100%" }}
            onClick={() => {
              onChangeSteps(2);
              setMessageType(messageType.email);
            }}
          >
            <MailOutlined style={{ fontSize: `${ICON_SIZE}px` }} />
            Enviar mensaje por Email
          </Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={dataSource} />;
    </div>
  );
};

export default TableWhatsapp;
