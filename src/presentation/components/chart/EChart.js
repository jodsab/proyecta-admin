import ReactApexChart from "react-apexcharts";
import { nombresUltimosMesesAbreviados } from "../../../helpers/getUltimosMesesAbreviados";
import { Row, Col, Typography, Spin } from "antd";
import useGetAllClients from "../../../hooks/getAllClients.hook";
import { agruparPorMes } from "../../../helpers/agruparPorMes";
import eChart from "./configs/eChart";

function EChart() {
  const { Title, Paragraph } = Typography;

  const { clients, loading } = useGetAllClients();

  const items = [
    {
      Title: "3,6K",
      user: "Users",
    },
    {
      Title: "2m",
      user: "Clicks",
    },
    {
      Title: "$772",
      user: "Sales",
    },
    {
      Title: "82",
      user: "Items",
    },
  ];

  const newEChart = { ...eChart };
  newEChart.options.xaxis.categories = nombresUltimosMesesAbreviados;
  const arrEntradas = agruparPorMes(clients);
  newEChart.series[0].data = arrEntradas;

  return (
    <>
      <div id="chart">
        {loading ? (
          <Spin />
        ) : (
          <ReactApexChart
            className="bar-chart"
            options={newEChart.options}
            series={newEChart.series}
            type="bar"
            height={220}
          />
        )}
      </div>
      <div className="chart-vistior">
        <Title level={5}>Uuarios registrados</Title>
        <Paragraph className="lastweek">
          than last week <span className="bnb2">+30%</span>
        </Paragraph>
        <Paragraph className="lastweek">
          Estos son los usuarios registrados en los ultimos 9 meses.
        </Paragraph>
        <Row gutter>
          {items.map((v, index) => (
            <Col xs={6} xl={6} sm={6} md={6} key={index}>
              <div className="chart-visitor-count">
                <Title level={4}>{v.Title}</Title>
                <span>{v.user}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default EChart;
