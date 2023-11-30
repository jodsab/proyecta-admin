import ReactApexChart from "react-apexcharts";
import { Typography, Spin } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "./configs/lineChart";
import useGetAllClients from "../../../hooks/getAllClients.hook";
import { nombresUltimosMesesAbreviados } from "../../../helpers/getUltimosMesesAbreviados";
import { obtenerRegistrosPorForma } from "../../../helpers/obtenerRegistroPorForma";

function LineChart() {
  const { Title, Paragraph } = Typography;

  const { loading, clients } = useGetAllClients();

  const newLineChart = { ...lineChart };

  newLineChart.options.xaxis.categories = nombresUltimosMesesAbreviados;
  const arrRegistros1 = obtenerRegistrosPorForma(clients, 1);
  const arrRegistros2 = obtenerRegistrosPorForma(clients, 2);
  newLineChart.series[0].data = arrRegistros1;
  newLineChart.series[1].data = arrRegistros2;

  return (
    <>
      <div className="linechart">
        <div>
          <Title level={5}>Usuarios registrados por plataforma</Title>
          <Paragraph className="lastweek">
            than last week <span className="bnb2">+30%</span>
          </Paragraph>
        </div>
        <div className="sales">
          <ul>
            <li>{<MinusOutlined />} Registrado por vendedor</li>
            <li>{<MinusOutlined />} Autoregistro</li>
          </ul>
        </div>
      </div>
      {loading ? (
        <Spin />
      ) : (
        <ReactApexChart
          className="full-width"
          options={newLineChart.options}
          series={newLineChart.series}
          type="area"
          height={350}
          width={"100%"}
        />
      )}
    </>
  );
}

export default LineChart;
