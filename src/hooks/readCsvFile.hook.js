import React, { useState } from "react";
import * as XLSX from "xlsx";

const useReadCsvFile = () => {
  const [csvJsonData, setCsvJsonData] = useState(null);
  const [csvKeys, setCsvKeys] = useState();
  const readCsvFile = (e) => {
    const file = e.file.originFileObj;
    const reader = new FileReader();

    reader.onload = (event) => {
      const arrayBuffer = event.target.result;
      const workbook = XLSX.read(new Uint8Array(arrayBuffer), {
        type: "array",
      });
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      setCsvJsonData(sheetData);
      const objectKeysSheetData = Object.keys(sheetData[0]);
      const columnsSheetData = objectKeysSheetData.map((key) => {
        return { title: key, dataIndex: key, key: key };
      });
      setCsvKeys(columnsSheetData);
    };

    reader.readAsArrayBuffer(file);
  };
  return { csvJsonData, csvKeys, readCsvFile };
};

export default useReadCsvFile;
