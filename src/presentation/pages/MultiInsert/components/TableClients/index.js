import { Button, Table, Typography, Row, Col } from "antd";
import { WhatsAppOutlined, MailOutlined } from "@ant-design/icons";
import ClientesService from "../../../../../api/Clientes";

const { Text } = Typography;

const ICON_SIZE = 18;

const TableClients = ({
  columns,
  dataSource,
  onChangeSteps,
  setInsertResult,
}) => {
  const postNewClients = async (data) => {
    const postRsp = await ClientesService.postNewClients(data);
    setInsertResult(postRsp);
    onChangeSteps(2);
  };

  return (
    <div>
      <Row justify="end" gutter={[24, 12]}>
        <Col xs={24} sm={24} md={12} lg={8} xl={7} className="mb-24">
          <Button
            type="primary"
            style={{ width: "100%" }}
            onClick={() => postNewClients(dataSource)}
          >
            <MailOutlined style={{ fontSize: `${ICON_SIZE}px` }} />
            Registrar nuevos clientes
          </Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={dataSource} />;
    </div>
  );
};

export default TableClients;
