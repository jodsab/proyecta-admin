import React from "react";
import { Divider, Steps } from "antd";
const PSteps = ({ current, onChange }) => {
  return (
    <div>
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={[
          {
            title: "Paso 1",
            status: "finish",
            description: "Sube un archivo de Excel",
          },
          {
            title: "Paso 2",
            status: "process",
            description: "Selecciona el tipo de mensaje",
            disabled: true,
          },
          {
            title: "Paso 3",
            status: "wait",
            description: "Enviar un mensaje",
            disabled: true,
          },
        ]}
      />
    </div>
  );
};
export default PSteps;
