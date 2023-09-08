import React, { useEffect, useState } from "react";
import { Divider, Table } from "antd";
import PSteps from "../../../../components/Steps";
import UploadAFile from "../../components/UploadAFile";
import useReadCsvFile from "../../../../../hooks/readCsvFile.hook";
import TableWhatsapp from "../../components/TableWhatsapp";
import WriteMessage from "../../components/WriteMessage";

const WhatsappSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { csvJsonData, csvKeys, readCsvFile } = useReadCsvFile();
  const [messageType, setMessageType] = useState("");

  const onChangeSteps = (value) => {
    console.log("onChange:", value);
    setCurrentStep(value);
  };

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
            <TableWhatsapp
              columns={csvKeys}
              dataSource={csvJsonData}
              onChangeSteps={onChangeSteps}
              setMessageType={setMessageType}
            />
            ;
          </>
        );
      case 2:
        return (
          <>
            <Divider />
            <WriteMessage />
          </>
        );
      default:
        return <p>ERROR</p>;
    }
  };
  return (
    <>
      <PSteps current={currentStep} onChange={onChangeSteps} />
      {renderStep(currentStep)}
    </>
  );
};

export default WhatsappSteps;
