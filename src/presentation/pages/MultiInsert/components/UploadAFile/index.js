import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const UploadAFile = ({ ...props }) => {
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Clickea o arrastra un archivo de excel para insertar datos.
      </p>
      <p className="ant-upload-hint">
        Los clientes agregados se agregaran a la lista en una tabla, cuidado de
        repetir usuarios o no te permitirá agregarlos.
      </p>
    </Dragger>
  );
};

export default UploadAFile;
