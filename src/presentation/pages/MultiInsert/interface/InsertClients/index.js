import React, { useEffect, useState } from "react";
import { Divider, Table } from "antd";
import PSteps from "../../../../components/Steps";
import UploadAFile from "../../components/UploadAFile";
import useReadCsvFile from "../../../../../hooks/readCsvFile.hook";
import TableClients from "../../components/TableClients";
import WriteMessage from "../../components/WriteMessage";

const InsertClients = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { csvJsonData, csvKeys, readCsvFile } = useReadCsvFile();
  const [insertResult, setInsertResult] = useState();

  const onChangeSteps = (value) => {
    console.log("onChange:", value);
    setCurrentStep(value);
  };

  const stepItems = [
    {
      title: "Paso 1",
      status: "finish",
      description: "Sube un archivo de Excel",
    },
    {
      title: "Paso 2",
      status: "process",
      description: "Confirmacion",
      disabled: true,
    },
    {
      title: "Paso 3",
      status: "wait",
      description: "Respuesta",
      disabled: true,
    },
  ];

  const renderStep = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <Divider />
            <UploadAFile
              type="file"
              accept=".xlsx"
              name="file"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              multiple={false}
              onChange={(e) => {
                readCsvFile(e);
                csvJsonData && setCurrentStep(1);
              }}
            />
          </>
        );
      case 1:
        return (
          <>
            <Divider />
            <TableClients
              columns={csvKeys}
              dataSource={csvJsonData}
              onChangeSteps={onChangeSteps}
              setInsertResult={setInsertResult}
            />
            ;
          </>
        );
      case 2:
        return (
          <>
            <Divider />
            <WriteMessage insertResult={insertResult} />
          </>
        );
      default:
        return <p>ERROR</p>;
    }
  };
  return (
    <>
      <PSteps
        current={currentStep}
        stepItems={stepItems}
        onChange={onChangeSteps}
      />
      {renderStep(currentStep)}
    </>
  );
};

export default InsertClients;
